(ns tic-tac-toe.main
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdomc]
            [c3kit.wire.js :as wjs]
            [tic-tac-toe.html :as html]
            [tic-tac-toe.setup :as setup]
            [reagent.ratom :as ratom]))


(defn ->inspect [x]
  (prn "inspect -> " x))

(defn app []
  (let [screen (:screen @setup/state)]
    (case screen
      :select-game-mode html/select-game-mode
      :select-board html/select-board
      :select-difficulty html/select-difficulty
      :game (do
              (ratom/run! (setup/auto-advance @setup/state))
              (html/game)))))

(defn ^:export main []
  (rdomc/render (rdomc/create-root (wjs/element-by-id "app")) [app]))