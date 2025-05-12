(ns tic-tac-toe.core
  (:require [tic-tac-toe.play-turn :as pt]
            [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.ai-turn :as ai]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

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
  (loop [board board result (ai/check-winner board) turn "p1"]
    (printer/display-board board)
    (if result
      (printer/output-result result)
      (let [[marker player-type] (set-players turn player1-marker player1-type player2-marker player2-type)
            player-fn (set-player-fn player-type)
            difficulty (set-difficulties turn player-type difficulties)
            new-board (pt/play-turn board marker player-fn difficulty)]
        (recur new-board
          (ai/check-winner new-board)
          (set-turn turn))))))

(declare select-difficulty)
(defn- retry-difficulty [iterations]
  (println "Not a difficulty, retry.")
  (select-difficulty iterations))

(defn select-difficulty [iterations]
  (printer/print-difficulty)
  (loop [out []]
    (if (= iterations (count out))
      out
      (let [player-choice (read-line)
            option (cond
                     (= "1" player-choice) :easy
                     (= "2" player-choice) :medium
                     (= "3" player-choice) :hard
                     :else (retry-difficulty iterations))]
        (recur (conj out option))))))

(declare select-game)
(defn- retry-select-game []
  (println "Not a game-mode, retry.")
  (select-game))

(defn select-game []
  (printer/print-game-options)
  (let [game (read-line)]
    (cond
      (= "1" game) (init-game board [:human :ai] ["X" "O"] (select-difficulty 1))
      (= "2" game) (init-game board [:ai :human] ["X" "O"] (select-difficulty 1))
      (= "3" game) (init-game board [:human :human] ["X" "O"] (select-difficulty 0))
      (= "4" game) (init-game board [:ai :ai] ["X" "O"] (select-difficulty 2))
      :else (retry-select-game))))

(defn -main [& args]
  (select-game))

