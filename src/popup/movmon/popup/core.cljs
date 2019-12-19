(ns movmon.popup.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [movmon.background.storage :as db]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols.chrome-port :refer [post-message!]]
            [chromex.ext.runtime :as runtime :refer-macros [connect]]))

(def server (atom nil))
; -- a message loop ---------------------------------------------------------------------------------------------------------

(defn process-message! [message]
  (log "POPUP: got message:" message))

(defn run-message-loop! [message-channel]
  (log "POPUP: starting message loop...")
  (go-loop []
    (when-some [message (<! message-channel)]
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
      [:div
       [:p "追剧页面: " [atom-input url]]
       [:p [:input {:type "button" :value "添加监控"
                    :on-click #(add-monitor! @url)}]]])))

(defn app
  []
  [:div
   [:p "hello popup!"]
   [add-monitor-pane]])

(defn init! []
  (log "POPUP: start init")
  (connect-to-background-page!)
  (r/render [app]
            (sel1 js/document "#app")))
