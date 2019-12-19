(ns movmon.background
  (:require-macros [chromex.support :refer [runonce]])
  (:require [movmon.background.core :as core]))

(runonce
  (core/init!))
