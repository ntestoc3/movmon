(ns movmon.background.storage
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [<! chan]]
            [chromex.logging :refer-macros [log info warn error group group-end]]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
            [chromex.protocols.chrome-storage-area :as sa]
            [chromex.ext.storage :as storage]))

(defn deep-merge [a & maps]
  (if (map? a)
    (apply merge-with deep-merge a maps)
    (apply merge-with deep-merge maps)))

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
  []
  (get-storage-key "monitors"))

(defn get-new-count
  []
  (get-storage-key "new-count"))

(defn get-monitor-info
  [title]
  (go
    (-> (<! (get-all-monitors))
        title)))

(defn set-new-count!
  [n]
  (sa/set (storage/get-local) #js {:new-count n}))

(defn update-monitors!
  [update-fn]
  (go
    (let [new-monitors (update-fn (<! (get-all-monitors)))]
      (log "DB: update monitors!" new-monitors)
      (sa/set (storage/get-local) (clj->js {:monitors new-monitors})))))

(defn save-monitor-info!
  [title url data new]
  (update-monitors! #(merge % {title {:url url
                                     :new new
                                     :data data}})))

(defn remove-monitor!
  [title]
  (update-monitors! #(dissoc % title)))

(defn set-monitor-new-state!
  [title new]
  (update-monitors! #(assoc-in % [title :new] new)))
