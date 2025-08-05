(ns tic-tac-toe.main
  (:require
            [c3kit.wire.js :as wjs]
            [reagent.dom :as rdom]
            [tic-tac-toe.board :as board]
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
  (add-watch setup/state :auto-turn setup/auto-advance))

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "app") ))

;(reagent.dom/render [app] (wjs/element-by-id "app") )
; (rdomc/render (rdomc/create-root (wjs/element-by-id "app")) [app])