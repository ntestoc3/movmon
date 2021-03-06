(ns movmon.background.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.string :as gstring]
            [goog.string.format]
            [clojure.string :as string]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.chrome-event-channel :refer [make-chrome-event-channel]]
            [chromex.protocols.chrome-port :refer [post-message! get-sender]]
            [chromex.ext.browser-action :refer [set-badge-text set-badge-background-color]]
            [chromex.ext.tabs :as tabs]
            [chromex.ext.notifications :as noti]
            [chromex.ext.runtime :as runtime]
            [chromex.ext.storage :as storage]
            [movmon.background.storage :as db]))

;;;; ================ 主要功能代码

(defn noti-box
  "显示通知框"
  [title message]
  (noti/create "movi-monitor" #js {:type "basic"
                                   :title title
                                   :message message
                                   :iconUrl "images/icon48.png"
                                   }))

(defn parse-html
  "Parse an html string into a document"
  [html]
  (let [doc (.createHTMLDocument js/document.implementation "mydoc")]
    (set! (.-innerHTML doc.documentElement) html)
    doc
    ))

(defn parse-dlink
  "解析下载地址"
  [span]
  (let [dl-addr (-> (sel1 span "input")
                    dommy/value)
        dl-name (-> (sel1 span "span a")
                    dommy/text)]
    {:url dl-addr
     :name dl-name}))

(defn parse-title
  "解析电影标题"
  [body]
  (-> (sel1 body "div.info > h1")
      dommy/text
      gstring/trim
      (string/replace #"\s+" " ")))

(defn error-handler [{:keys [status status-text]}]
  (log "error on ajax request" status status-text))

(defn set-badge-count!
  [n]
  (set-badge-text (clj->js {:text (if (pos? n)
                                    (str n)
                                    "")}))
  (set-badge-background-color #js {:color "#ff0000"}))

(defn set-new-count!
  "设置新计数"
  [n]
  (doto n
    db/set-new-count!
    set-badge-count!))

(defn update-badge!
  "根据当前计数更新badge"
  []
  (go
    (-> (<! (db/get-new-count))
        set-badge-count!)))

(defn mark-monitor-new-state!
  "更新监控的更新状态和更新计数"
  [title new-state new-data-count]
  (go
    (db/set-monitor-new-state! (keyword title) new-state)
    (let [new-count (<! (db/get-new-count))
          curr-count (if new-state
                       (+ new-count new-data-count)
                       (max 0
                            (- new-count new-data-count)))]
      (log "current count:" curr-count)
      (set-new-count! curr-count))))

(defn check-update-data!
  [name info body]
  (let [html-body (parse-html body)
        dl-spans (sel html-body "span.dlname.nm") ;; 获取下载框dom元素
        last-data (first (:data info))
        datas (map parse-dlink dl-spans)]
    (if (= (:name (first datas))
           (:name last-data))
      ;; 如果名字与已更新的最后一集名字相同，则没有更新
      (log "check update:" name "no new data!")

      ;; 否则保存新更新的数据，
      (let [update-datas (take-while #(not= last-data %) datas)
            new-datas (if (:new info)
                        ;; 之前的数据也是更新数据(没有标记为未更新),则合并数据
                        (concat update-datas (:data info))
                        update-datas)
            update-count (count update-datas)]
        (log name "check update new datas save:" new-datas "\n")
        (go
          (noti-box "剧集更新！" (str name "更新" update-count "集！"))
          (<! (db/save-monitor-info! name (:url info) new-datas true))
          (mark-monitor-new-state! name true update-count))
        ))))

(defn proc-monitor
  [[name info]]
  (let [url (:url info)]
    (log "proc monitor :" name "url:" url)
    (GET url
        {:handler (partial check-update-data! name info)
         :error-handler error-handler})))

(defn proc-monitors
  "处理所有监控"
  []
  (log "BACKGROUND proc monitors starting...")
  (go
    (let [monitors (<! (db/get-all-monitors))]
      (doseq [monitor-info monitors]
        (proc-monitor monitor-info)))))

(defn new-monitor-handler!
  "新监控数据"
  [url body]
  (let [html-body (parse-html body)
        title (parse-title html-body)
        dl-spans (sel html-body "span.dlname.nm")
        datas (take 3 (map parse-dlink dl-spans))]
    (log title "datas save:" datas)
    (go
      (noti-box "新监控" (str title "添加成功")))
    (db/save-monitor-info! title url datas false)))

(defn add-monitor!
  [url]
  (log "add monitor:" url)
  (GET url
      {:handler (partial new-monitor-handler! url)
       :error-handler error-handler}))

;;;;;; ======== 连接消息事件操作
(def clients (atom []))

; -- clients manipulation ---------------------------------------------------------------------------------------------------

(defn add-client! [client]
  (log "BACKGROUND: client connected" (get-sender client))
  (swap! clients conj client))

(defn remove-client! [client]
  (log "BACKGROUND: client disconnected" (get-sender client))
  (let [remove-item (fn [coll item] (remove #(identical? item %) coll))]
    (swap! clients remove-item client)))


; -- client event loop ------------------------------------------------------------------------------------------------------


(defn run-client-message-loop! [client]
  (log "BACKGROUND: starting event loop for client:" (get-sender client))
  (go-loop []
    (when-some [message (-> (<! client)
                            (js->clj :keywordize-keys true))]
      (log "message:" message)
      (if-some [msg-type (:type message)]
        (case msg-type
          "add-monitor" (add-monitor! (:url message))
          "conn" (log "BACKGROUND: new conn " (:from message))
          "mark-monitor-old" (mark-monitor-new-state! (:name message)
                                                      false
                                                      (:data-count message))
          (log "BACKGROUND: unsupport message type" (str msg-type) "from" (get-sender client))
          )
        (log "BACKGROUND: got client message:" message "from" (get-sender client)))
      (recur))
    (log "BACKGROUND: leaving event loop for client:" (get-sender client))
    (remove-client! client)))

; -- event handlers ---------------------------------------------------------------------------------------------------------

(defn handle-client-connection! [client]
  (add-client! client)
  (post-message! client #js {:type "hello" :msg "from background!"})
  (run-client-message-loop! client))

(defn tell-clients-about-new-tab! []
  (doseq [client @clients]
    (post-message! client "a new tab was created")))

(defn handle-storage-changed! [changes area]
  (doseq [client @clients]
    (post-message! client #js {:type "storage-changed"
                               :area area
                               :changes changes}))
  (log "storage " area "changed" changes)
  )

; -- main event loop --------------------------------------------------------------------------------------------------------

(defn process-chrome-event [event-num event]
  (log (gstring/format "BACKGROUND: got chrome event (%05d)" event-num) event)
  (let [[event-id event-args] event]
    (case event-id
      ::runtime/on-connect (apply handle-client-connection! event-args)
      ::storage/on-changed (apply handle-storage-changed! event-args)
      ;;::tabs/on-created (tell-clients-about-new-tab!)
      nil)))

(defn run-chrome-event-loop! [chrome-event-channel]
  (log "BACKGROUND: starting main event loop...")
  (go-loop [event-num 1]
    (when-some [event (<! chrome-event-channel)]
      (process-chrome-event event-num event)
      (recur (inc event-num)))
    (log "BACKGROUND: leaving main event loop")))

(defn boot-chrome-event-loop! []
  (let [chrome-event-channel (make-chrome-event-channel (chan))]
    ;;(tabs/tap-all-events chrome-event-channel)
    (runtime/tap-all-events chrome-event-channel)
    (storage/tap-on-changed-events chrome-event-channel)
    (run-chrome-event-loop! chrome-event-channel)))


(defn init! []
  (log "BACKGROUND: start ")
  (js/setInterval proc-monitors (* 5 60 1000)) ; 每5分钟执行1次监控更新
  (proc-monitors)
  (update-badge!)
  (boot-chrome-event-loop!))
