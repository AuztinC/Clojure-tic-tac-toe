(ns tic-tac-toe.game-options
  (:require [tic-tac-toe.printer :as printer]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.board :as board]))

(declare select-board)
(defn- retry-select-board []
  (do
    (println "Oops, try again.")
    (select-board)))

(defn select-board []
  (printer/print-board-selection)
  (let [player-choice (read-line)]
    (cond
      (= "1" player-choice) :3x3
      (= "2" player-choice) :4x4
      :else (retry-select-board))))

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
      (= "1" game) (init/init-game (board/get-board :3x3) [:human :ai] ["X" "O"] (select-difficulty 1))
      (= "2" game) (init/init-game (board/get-board :3x3) [:ai :human] ["X" "O"] (select-difficulty 1))
      (= "3" game) (init/init-game (board/get-board :3x3) [:human :human] ["X" "O"] (select-difficulty 0))
      (= "4" game) (init/init-game (board/get-board :3x3) [:ai :ai] ["X" "O"] (select-difficulty 2))
      :else (retry-select-game))))