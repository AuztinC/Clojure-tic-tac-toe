(ns tic-tac-toe.game-options
  (:require [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.replay :as replay]))

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
      (= "3" player-choice) :3x3x3
      :else (retry-select-board))))

(declare select-difficulty)
(defn- retry-difficulty []
  (println "Not a difficulty, retry."))

(defn select-difficulty [iterations]
  (printer/print-difficulty)
  (loop [out []]
    (printer/print-difficulty-iteration (count out))
    (if (= iterations (count out))
      out
      (let [player-choice (read-line)]
        (cond
          (= "1" player-choice) (recur (conj out :easy))
          (= "2" player-choice) (recur (conj out :medium))
          (= "3" player-choice) (recur (conj out :hard))
          :else (do
                  (retry-difficulty)
                  (recur out)))))))

(declare select-game)
(defn- retry-select-game []
  (println "Not a game-mode, retry.")
  (select-game))

(defn- setup-game [player-types difficulty-count]
  (let [board (board/get-board (select-board))
        difficulties (select-difficulty difficulty-count)]
    (init/init-game {:board board
                     :players player-types
                     :markers ["X" "O"]
                     :difficulties difficulties
                     :turn "p1"
                     :store :file})))

(defn select-game []
  (printer/print-game-options)
  (let [choice (read-line)]
    (case choice
      "1" (setup-game [:human :ai] 1)
      "2" (setup-game [:ai :human] 1)
      "3" (setup-game [:human :human] 0)
      "4" (setup-game [:ai :ai] 2)
      (retry-select-game))))

(defn print-load-game []
  (println "Previous game detected! Resume?
  1: Yes
  2: No"))

(declare load-game)
(defn retry-load-game []
  (do
    (println "I'm sorry, that's not an option. Try again")
    (load-game)))

(defn load-game []
  (if (db/in-progress?)
    (do
      (print-load-game)
      (let [choice (read-line)]
        (case choice
          "1" (init/resume-game)
          "2" (select-game)
          (retry-load-game))))
    (select-game)))

(declare dispatch-id)
(defn retry-dispatch-id []
  (do
    (println "Game not found! Let's try that again.")
    (dispatch-id)))

(defn dispatch-id []
  (println "Please enter your game ID: ")
  (let [id-str (read-line)
        id (Integer/parseInt id-str)
        game (replay/unpack-game id)]
    (if (empty? game)
      (retry-dispatch-id)
      (replay/replay game))))

(declare watch-replay?)
(defn retry-watch-replay []
  (do
    (println "Bad input, try again.")
    (watch-replay?)))

(defn watch-replay? []
  (if (db/previous-games?)
    (do
      (println "Would you like to watch a replay?
  You'll need a match ID.
  1: Yes
  2: No")
      (let [choice (read-line)]
        (case choice
          "1" (dispatch-id)
          "2" (load-game)
          (retry-watch-replay))))
    (load-game)))



