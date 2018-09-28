(ns snowcobra.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[snowcobra started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[snowcobra has shut down successfully]=-"))
   :middleware identity})
