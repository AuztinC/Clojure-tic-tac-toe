(ns tic-tac-toe.main
  (:require [reagent.dom.client :as rdomc]
            [c3kit.wire.js :as wjs]
            [tic-tac-toe.html :as html]
            [tic-tac-toe.setup :as setup]))

(defn app []
  (let [screen (:screen @setup/state)]
    (case screen
      :select-game-mode html/select-game-mode
      :select-board (html/select-board)
      :select-difficulty (html/select-difficulty)
      :game (html/game)
      :game-over (html/game-over))))

(defonce started?
  (do
    (add-watch setup/state :auto-turn setup/auto-advance)
    true))

(defn ^:export main []
  (rdomc/render (rdomc/create-root (wjs/element-by-id "app")) [app]))