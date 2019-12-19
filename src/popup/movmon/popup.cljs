(ns movmon.popup
  (:require-macros [chromex.support :refer [runonce]])
  (:require [movmon.popup.core :as core]))

(runonce
  (core/init!))
