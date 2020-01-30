(ns movmon.background.storage
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
            [chromex.protocols.chrome-storage-area :as sa]
            [chromex.ext.storage :as storage]))

(defn get-storage-key
  [k]
  (let [local-storage (storage/get-local)]
    (go
      (let [[[data] error] (<! (sa/get local-storage k))]
        (if error
          (do (error "fetch" k "info error:" error)
              nil)
          (-> (js->clj data :keywordize-keys true)
              (doto #(log "DB: get storage key" %1))
              (get (keyword k))))))))

(defn get-all-monitors
  "获取所有监控项信息"
  []
  (get-storage-key "monitors"))

(defn get-new-count
  "获取更新计数"
  []
  (get-storage-key "new-count"))

(defn get-monitor-info
  "获取监控项信息"
  [title]
  (go
    (-> (<! (get-all-monitors))
        title)))

(defn set-new-count!
  "设置更新统计计数"
  [n]
  (sa/set (storage/get-local) #js {:new-count n}))

(defn update-monitors!
  [update-fn]
  (go
    (let [new-monitors (update-fn (<! (get-all-monitors)))]
      (log "DB: update monitors!" new-monitors)
      (sa/set (storage/get-local) (clj->js {:monitors new-monitors})))))

(defn save-monitor-info!
  "保存监控项"
  [title url data new]
  (update-monitors! #(merge % {title {:url url
                                     :new new
                                     :data data}})))

(defn remove-monitor!
  "删除一个监控项"
  [title]
  (update-monitors! #(dissoc % title)))

(defn set-monitor-new-state!
  "设置监控项的更新状态"
  [title new]
  (update-monitors! #(assoc-in % [title :new] new)))
