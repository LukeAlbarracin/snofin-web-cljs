(ns user
  (:require [snowcobra.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [snowcobra.figwheel :refer [start-fw stop-fw cljs]]
            [snowcobra.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'snowcobra.core/repl-server))

(defn stop []
  (mount/stop-except #'snowcobra.core/repl-server))

(defn restart []
  (stop)
  (start))


