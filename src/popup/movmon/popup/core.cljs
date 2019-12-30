(ns movmon.popup.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [clojure.string :as string]
            [movmon.background.storage :as db]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols.chrome-port :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

(def server (atom nil))

(def monitors (r/atom {}))

(defn update-monitors!
  []
  (go
    (reset! monitors (<! (db/get-all-monitors)))))

; -- a message loop -----------
(defn process-message! [message]
  (log "POPUP: got message:" message)
  (if-some [msg-type (:type message)]
    (case msg-type
      "storage-changed"
      (when (identical? "local" (:area message))
        (log "storage changed" (get-in message [:changes]))
        (reset! monitors (get-in message [:changes :monitors :newValue])))
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

(defn del-monitor!
  [title]
  (log "del monitor" title)
  (db/remove-monitor! title)
  (update-monitors!))

(defn mark-monitor-old!
  [title data-count]
  ;; 注意发送消息必须转换成js格式，不能发送keyword，要转换成str。
  (post-message! @server #js {:type "mark-monitor-old"
                              :name (name title)
                              :data-count data-count
                              }))

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

(defn copy-text [text]
  (let [el (js/document.createElement "textarea")
        prev-focus-el js/document.activeElement
        y-pos (or (.. js/window -pageYOffset)
                  (.. js/document -documentElement -scrollTop))]
    (set! (.-style el) #js {:position "absolute"
                            :left "-9999px"
                            :top (str y-pos "px")
                            ;; iOS workaround?
                            :fontSize "12pt"
                            ;; reset box-model
                            :border "0"
                            :padding "0"
                            :margin "0"})
    (set! (.-value el) text)
    (.addEventListener el "focus" (fn [_] (.scrollTo js/window 0 y-pos)))
    (js/document.body.appendChild el)
    (.setSelectionRange el 0 (.. el -value -length))
    (.focus el)
    (js/document.execCommand "copy")
    (.blur el)
    (when prev-focus-el
      (.focus prev-focus-el))
    (.removeAllRanges (.getSelection js/window))
    (js/window.document.body.removeChild el)))

(defn copy-urls
  [data]
  (->> (map :url data)
       (string/join "\n")
       copy-text))

(defn curr-monitors-pane
  []
  (let [monitors-data @monitors]
    (log "curr monitors:" monitors-data "type:" (type monitors-data))
    (if (empty? monitors-data)
      [:div "没有监控"]
      [:div [:ul (map (fn [[title {:keys [data new url]}]]
                        ^{:key title}
                        [:li.mov
                         {:class (if new "mov-new")}
                         [:div.mov-info
                          [:div.mov-title (name title)]
                          [:div.mov-op
                           [:input.del
                            {:type "button"
                             :value "删除监控"
                             :on-click (fn [_]
                                         (del-monitor! title)
                                         (if new
                                           (mark-monitor-old! title (count data))))}]
                           [:input.copy
                            {:type "button"
                             :value "复制链接"
                             :on-click (fn [_]
                                         (copy-urls data)
                                         (if new
                                           (mark-monitor-old! title (count data))))}]]]
                         [monitor-video data]])
                      monitors-data)]])))

(defn app
  []
  [:div
   [add-monitor-pane]
   [curr-monitors-pane]])

(defn init! []
  (log "POPUP: start init")
  (connect-to-background-page!)
  (update-monitors!)
  (r/render [app]
            (sel1 js/document "#app")))

