(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [reagent.dom.client :as rdomc]
            [c3kit.wire.js :as wjs]))

(defn app []
  [:div
   {:id "bob"}
   [:a {:href "/"} ]
   [:p "Hi there my friend Sir Scoops"]])

(defn ^:export main []
  #_(rdomc/render (rdomc/create-root (wjs/element-by-id "app")) [app])
  (rdom/render [app] (wjs/element-by-id "app")))