(ns multi-client-ws.core
  (:require [reagent.core :as reagent :refer [atom]]
            [multi-client-ws.websockets :as ws]))

(defonce messages (atom []))

(defn message-list []
  [:ul
   (for [[i message] (map-indexed vector @messages)]
     ^{:key i}
     [:li message])])

(def value (reagent/atom nil))

(defn message-input []
    (fn []
      [:textarea.form-control
       {:type :text
        :rows 10
        :cols 50
        :placeholder "type in a message and press enter"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down
        #(when (= (.-keyCode %) 187)
           (ws/send-transit-msg!
            {:message @value})
           (reset! value nil))}]))

(defn home-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:p @value]
     [:h2 "This is Coding Club!"]]]
   [:div.row
    [:div.col-sm-6
     [message-list]]]
   [:div.row
    [:div.row>div.col-sm-12
     [message-input]]]])

(defn update-messages! [{:keys [message]}]
  (swap! messages #(vec (take 10 (conj % message)))))

(defn mount-components []
  (reagent/render-component [#'home-page] (.getElementById js/document "app")))

(defn init! []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)
  (mount-components))


