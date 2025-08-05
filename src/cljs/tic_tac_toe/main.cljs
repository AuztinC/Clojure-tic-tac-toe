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

#_(defonce started?
  (add-watch setup/state :auto-turn setup/auto-advance))

(defn ^:export main []
  (add-watch setup/state :auto-turn setup/auto-advance)
  (rdom/render [app] (wjs/element-by-id "app") ))
