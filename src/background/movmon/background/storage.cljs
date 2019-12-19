(ns movmon.background.storage
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [chromex.protocols.chrome-storage-area :refer [get set]]
            [chromex.ext.storage :as storage]))

(defn save-monitor-info!
  [name url data]
  (-> (storage/get-local)
      (set (clj->js {:monitors {name {:url url
                                      :data data}}}))))

(defn get-all-monitors
  []
  (let [local-storage (storage/get-local)]
    (go
      (let [[[monitors] error] (<! (get local-storage "monitors"))]
        (if error
          (error "fetch monitors info error:" error)
          (-> (js->clj monitors :keywordize-keys true)
              :monitors))))))

(defn get-monitor-info
  [name]
  (go
    (-> (<! (get-all-monitors))
        name)))


