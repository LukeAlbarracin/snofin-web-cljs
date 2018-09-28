(ns snowcobra.routes.home
  (:require [snowcobra.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.shell :as shell]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defmacro python-checker [])

(defn execute-python []
  (let [result (shell/sh "python" "-c" "print (2+7)")]
    (if (zero? (count (get result :error)))
      (get result :err)
      (get result :out))))

(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/cobra" [] (response/ok (str (execute-python))))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8"))))

