(ns multi-client-ws.routes.websockets
  (import [java.io ByteArrayInputStream])
  (:require [compojure.core :refer [GET PATCH defroutes]]
            [org.httpkit.server :refer [send! with-channel on-close on-receive]]
            [clojure.string :as str]
            [taoensso.timbre :as timbre]
            [cognitect.transit :as transit]
            [clojure.java.shell :as shell]
            [cheshire.core :refer :all]
            [clojure.java.io :as io]))

(defonce channels (atom #{}))

(defn- clj->json [msg]
  "HARDCODED: Takes a clojure string and converts it to JSON"
      (str/replace "[\"^ \",\"~:message\",\"replace-this\"]" 
        #"replace-this" msg))

(defn- json->clj [msg]
  "Converts a JSON-encoded map into a clojure string (clojure.java.string)"
  (as-> msg result
    (.getBytes result)
    (java.io.ByteArrayInputStream. result)
    (clojure.java.io/input-stream result)
    (transit/reader result :json)
    (transit/read result)
    (:message result)))
    
(defn- error->json [msg]
  "Returns the error of shell code"
  (as-> msg result
    (str result)
    (str/split result #"\n")
    (last result)
    (clj->json result)))

;(defmacro message-multiple-lines [f1 msg]
;  "Remember to use destructuring"
;  `(as-> msg result
;    ~@f1
;    (str/split result #"\n")
    
(defn- execute-python! [msg]
  "Runs a python shell"
  (let [result (shell/sh "python" "-c" (json->clj msg))]
    (if (str/blank? (:err result))
      (do
        (doseq [result (str/split (:out result) #"\n") channel @channels]
          (send! channel (clj->json result))))
      (do
        (doseq [channel @channels]
          (send! channel (error->json (:err result))))))))

(defn notify-clients [msg]
  "Talks to the frontend..."
  (execute-python! msg))
          
(defn connect! [channel]
  (timbre/info "channel open")
  (swap! channels conj channel))

(defn disconnect! [channel status]
  (timbre/info "channel closed:" status)
  (swap! channels #(remove #{channel} %)))

(defn ws-handler [request]
  (with-channel request channel
    (connect! channel)
    (on-close channel (partial disconnect! channel))
    (on-receive channel #(notify-clients %))))

(defroutes websocket-routes
  (GET "/ws" request (ws-handler request)))