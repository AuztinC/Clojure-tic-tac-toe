(ns tic-tac-toe.init-game
  (:require [tic-tac-toe.play-turn :as pt]
            [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.ai-turn :as ai]
            [tic-tac-toe.board :as board]))


(defn set-turn [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn set-players [turn player1-marker player1-type player2-marker player2-type]
  (if (= "p1" turn)
    [player1-marker player1-type]
    [player2-marker player2-type]))

(defn set-player-fn [player-type]
  (cond
    (= :human player-type) ht/human-turn
    (= :ai player-type) ai/ai-turn))

(defn set-difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if(= :ai player-type)(first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn init-game
  [board [player1-type player2-type] [player1-marker player2-marker] difficulties]
  (loop [board board result (board/check-winner board) turn "p1"]
    (printer/display-board board)
    (if result
      (printer/output-result result)
      (let [[marker player-type] (set-players turn player1-marker player1-type player2-marker player2-type)
            player-fn (set-player-fn player-type)
            difficulty (set-difficulties turn player-type difficulties)
            new-board (pt/play-turn board marker player-fn difficulty)]
        (recur new-board
          (board/check-winner new-board)
          (set-turn turn))))))