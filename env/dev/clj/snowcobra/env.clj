(ns snowcobra.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [snowcobra.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[snowcobra started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[snowcobra has shut down successfully]=-"))
   :middleware wrap-dev})
