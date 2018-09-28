(ns snowcobra.handler
  (:require [snowcobra.middleware :as middleware]
            [snowcobra.layout :refer [error-page]]
            [snowcobra.routes.home :refer [home-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [ring.util.http-response :as response]
            [compojure.route :as route]
            [snowcobra.env :refer [defaults]]
            [mount.core :as mount]
            [clojure.tools.logging :as log]
            [snowcobra.config :refer [env]]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (doseq [component (:started (mount/start))]
    (log/info component "started")))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents)
  (log/info "snowcobra has shut down!"))

(mount/defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'home-routes
          (wrap-routes middleware/wrap-csrf)
          ;(wrap-routes middleware/wrap-formats)
          )
          (route/not-found
             (:body
               (error-page {:status 404
                            :title "page not found"}))))))

