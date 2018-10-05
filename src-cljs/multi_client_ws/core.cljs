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
        :rows 25
        :cols 5
        :placeholder "Press any key to continue"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down #(when (= (.-keyCode %) 9)
                        (reset! value (str @value "\t")))}]))
       
(def output (reagent/atom "Hello There!"))

;; NEED A DATABASE OF EXERCISES, HINTS AND/OR TIPS, SKIP BUTTON?, VALIDATION (IF ANSWER IS CORRECT)

;(defmacro read-and-apply [f1 ])

(defn home-page [{:keys [message]}]
  [:div.container
   [:div.row
    [:div.col-md-12
     [:center
      [:h3 "Exercise 1: Print out the number 100"]]]]
   [:div.row
    [:div.col-sm-6]]
   [:div.row
    [:div.row>div.col-sm-12
      [message-input]
      [:center
        [:button.btn.btn-primary 
          {:on-click #(do 
          (ws/send-transit-msg! {:message @value})
          (reset! messages nil)
          (reset! output @value))                           
          :style {:font-size "50px"}}
        "Execute the Python Script"]
        [:h3 "Output"]
        (for [x @messages]
          [:h2 x])
       ]
     ]]])

(defn update-messages! [{:keys [message]}]
  (swap! messages #(vec (take 10 (conj % message)))))

(defn mount-components []
  (reagent/render-component [#'home-page] (.getElementById js/document "app")))

(defn init! []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)
  (mount-components))