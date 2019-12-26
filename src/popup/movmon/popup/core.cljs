(ns movmon.popup.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [movmon.background.storage :as db]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols.chrome-port :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

(def server (atom nil))

(def monitors (r/atom {}))

; -- a message loop -----------
(defn process-message! [message]
  (log "POPUP: got message:" message)
  (if-some [msg-type (:type message)]
    (case msg-type
      "storage-changed"
      (when (identical? "local" (:area message))
        (log "storage changed" (get-in message [:changes]))
        (reset! monitors (get-in message [:changes :newValue :monitors])))
      (log "POPUP: unproced message:" msg-type))))

(defn run-message-loop! [message-channel]
  (log "POPUP: starting message loop...")
  (go-loop []
    (when-some [message (-> (<! message-channel)
                            (js->clj :keywordize-keys true))]
      (process-message! message)
      (recur))
    (log "POPUP: leaving message loop")))

(defn connect-to-background-page! []
  (let [background-port (runtime/connect)]
    (reset! server background-port)
    (post-message! background-port #js {:type "conn"
                                        :from "popup"})
    (run-message-loop! background-port)))


; -- main entry point -------------------------------------------------------------------------------------------------------

(defn add-monitor!
  [url]
  (log "add monitor" url)
  (post-message! @server #js {:type "add-monitor"
                              :url url}))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn add-monitor-pane
  []
  (let [url (r/atom "http://")]
    (fn []
      [:p "追剧页面: " [atom-input url] [:input {:type "button" :value "添加监控"
                                                 :on-click #(add-monitor! @url)}]]
      )))

(defn monitor-video
  [data]
  (log "monitor start" data)
  [:ul
   (map-indexed (fn [idx info]
                  (log "monitor video" idx info)
                  ^{:key idx} [:li
                               [:a {:href (:url info)}
                                (:name info)]])
                data)])

(defn curr-monitors-pane
  []
  (let [monitors-data @monitors]
    (log "curr monitors:" monitors-data "type:" (type monitors-data))
    (if (empty? monitors-data)
      [:div "没有监控"]
      [:div [:ul (map (fn [[title info]]
                        ^{:key title}
                        [:li
                         (name title)
                         [monitor-video (:data info)]])
                      monitors-data)]])))

(defn app
  []
  [:div
   [add-monitor-pane]
   [curr-monitors-pane]])

(defn init! []
  (log "POPUP: start init")
  (connect-to-background-page!)
  (go (reset! monitors (<! (db/get-all-monitors))))
  (r/render [app]
            (sel1 js/document "#app")))


