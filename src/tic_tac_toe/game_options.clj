(ns tic-tac-toe.game-options
  (:require [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.game :as init]
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
(defn- retry-select-game [store]
  (println "Not a game-mode, retry.")
  (select-game store))

(defn- setup-game [store player-types difficulty-count]
  (let [new-game-id (db/set-new-game-id {:store store})
        board (board/get-board (select-board))
        board-size (case (count board)
                     9 :3x3
                     16 :4x4
                     :3x3x3)
        difficulties (select-difficulty difficulty-count)]
    (init/init-game {:screen :main-menu
                     :active true
                     :id new-game-id
                     :board-size board-size
                     :board board
                     :players player-types
                     :markers ["X" "O"]
                     :difficulties difficulties
                     :turn "p1"
                     :store store})))

(defn select-game [store]
  (printer/print-game-options)
  (let [choice (read-line)]
    (case choice
      "1" (setup-game store [:human :ai] 1)
      "2" (setup-game store [:ai :human] 1)
      "3" (setup-game store [:human :human] 0)
      "4" (setup-game store [:ai :ai] 2)
      (retry-select-game store))))

(defn print-load-game []
  (println "Previous game detected! Resume?
  1: Yes
  2: No"))

(declare load-game)
(defn retry-load-game [store]
  (do
    (println "I'm sorry, that's not an option. Try again")
    (load-game store)))

(defn load-game [store]
  (if (db/in-progress? {:store store})
    (do
      (print-load-game)
      (let [choice (read-line)]
        (case choice
          "1" (init/resume-game store)
          "2" (select-game store)
          (retry-load-game store))))
    (select-game store)))

(declare dispatch-id)
(defn retry-dispatch-id [store]
  (do
    (println "Game not found! Let's try that again.")
    (dispatch-id store)))

(defn dispatch-id [store]
  (println "Please enter your game ID: ")
  (let [id-str (read-line)
        id (Integer/parseInt id-str)
        game (db/find-game-by-id {:store store} id)]
    (if (nil? game)
      (retry-dispatch-id store)
      (replay/replay game))))

(declare watch-replay?)
(defn retry-watch-replay [store]
  (do
    (println "Bad input, try again.")
    (watch-replay? store)))

(defn watch-replay? [store]
  (if (db/previous-games? {:store store})
    (do
      (println "Would you like to watch a replay?
  You'll need a match ID.
  1: Yes
  2: No")
      (let [choice (read-line)]
        (case choice
          "1" (dispatch-id store)
          "2" (load-game store)
          (retry-watch-replay store))))
    (load-game store)))

;(case (:screen state)
;    :game-over (draw-game-over state)
;    :in-progress-game (draw/draw-in-progress-game state)
;    :select-game-mode (draw/draw-select-game-mode state)
;    :select-board (draw/draw-select-board state)
;    :select-difficulty (draw/draw-select-difficulty state)
;    :replay-confirm (draw/draw-replay-screen state)
;    :replay-id-entry (draw/draw-replay-id-entry state)
;    :replay (watch-replay state)
;    :game (cond
;            (or (= :3x3 (:board-size state)) (= :4x4 (:board-size state)))
;            (draw-game-screen state)
;
;            (= :3x3x3 (:board-size state))
;            (draw-3d-game-screen state))
;    :else (draw/draw-select-game-mode state))

(defn cli-loop [state]
  (loop [state state]
    (let [new-state (case (:screen state)
                      :select-game-mode (select-game state)
                      :select-board (select-board)
                      :select-difficulty (select-difficulty state)
                      :in-progress-game (load-game state)
                      :replay-confirm (watch-replay? state)
                      :replay-id-entry (dispatch-id state)
                      :replay (replay/replay state)
                      :game (init/game-loop state)
                      state)]
      (when new-state
        (recur new-state)))))



