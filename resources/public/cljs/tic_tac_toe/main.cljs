(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [reagent.dom.client :as rdomc]
            [c3kit.wire.js :as wjs]))

(defn app []
  [:div
   {:id "bob"}
   [:a {:href "/"} ]
   [:p "Hi friend wthis is new info"]])

(defn ^:export main []
  (rdomc/render (rdomc/create-root (wjs/element-by-id "app")) [app])
  #_(rdom/render [app] (wjs/element-by-id "app")))