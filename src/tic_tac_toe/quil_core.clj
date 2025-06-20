(ns tic-tac-toe.quil-core
  (:require [quil.core :as q]))

(defmulti painter :game-state)

(defmethod painter :main-menu [_menu]
  (q/rect 10 10 50 50))

(defn ->mouse-pos []
  (let [mouse-x (q/mouse-x)
        mouse-y (q/mouse-y)]
   (println (str mouse-x " " mouse-y))))

(defn create-menu []
  (q/rect 10 10 50 50))

(defn setup []
  (q/create-graphics 800 600))

(defn draw []
  (q/background 255)
  (painter {:game-state :main-menu})
  (q/ellipse 100 100 50 50))

(q/defsketch tic-tac-toe
  :host "host"
  :size [800 600]
  :mouse-pressed ->mouse-pos
  :setup setup
  :draw draw)