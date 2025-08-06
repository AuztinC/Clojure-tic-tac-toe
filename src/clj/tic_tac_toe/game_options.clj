(ns tic-tac-toe.game-options
  (:require [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.game :as init]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.replay :as replay]))

(declare select-board)
(defn- retry-select-board [state]
  (do
    (println "Oops, try again.")
    (select-board state)))

(defn select-board [state]
  (printer/print-board-selection)
  (let [player-choice (read-line)]
    (cond
      (= "1" player-choice) (assoc state :board-size :3x3 :screen :select-difficulty)
      (= "2" player-choice) (assoc state :board-size :4x4 :screen :select-difficulty)
      (= "3" player-choice) (assoc state :board-size :3x3x3 :screen :select-difficulty)
      :else (retry-select-board state))))

(declare select-difficulty)
(defn- retry-difficulty []
  (println "Not a difficulty, retry."))

(defn step-difficulty [state input]
  (let [out (conj (vec (:difficulties state)) input)]
    (if (= (:difficulties-count) (count out))
      (let [id (db/set-new-game-id {:store (:store state)})
            board (board/get-board (:board-size state))]
        (assoc (dissoc state :difficulty-count)
          :difficulties out
          :screen :game
          :id id
          :board board
          :turn "p1"
          :markers ["X"]))
      (assoc state :difficulties out))))

(defn select-difficulty [state]
  (printer/print-difficulty)
  (loop [out []]
    (if (= (:difficulty-count state) (count out))
      (let [id (db/set-new-game-id {:store (:store state)})
            board (board/get-board (:board-size state))]
        (assoc (dissoc state :difficulty-count)
          :difficulties out
          :screen :game
          :id id
          :board board
          :turn "p1"
          :markers ["X" "O"]))
      (do
        (printer/print-difficulty-iteration (count out))
        (let [player-choice (read-line)]
          (case player-choice
            "1" (recur (conj out :easy))
            "2" (recur (conj out :medium))
            "3" (recur (conj out :hard))
            (do
              (retry-difficulty)
              (recur out))))))))

(declare select-game)
(defn- retry-select-game [store]
  (println "Not a game-mode, retry.")
  (select-game store))

(defn select-game [state]
  (printer/print-game-options)
  (let [choice (read-line)]
    (case choice
      "1" (assoc state :players [:human :ai]
            :screen :select-board
            :difficulty-count 1)
      "2" (assoc state :players [:ai :human]
            :screen :select-board
            :difficulty-count 1)
      "3" (assoc state :players [:human :human]
            :screen :select-board
            :difficulty-count 0)
      "4" (assoc state :players [:ai :ai]
            :screen :select-board
            :difficulty-count 2)
      (do
        (retry-select-game state)
        state))))

(defn print-load-game []
  (println "Previous game detected! Resume?
  1: Continue Game
  2: No Thanks"))

(declare load-game)
(defn retry-load-game [store]
  (do
    (println "I'm sorry, that's not an option. Try again")
    (load-game store)))

(defn load-game [state]
  (if-let [game (db/in-progress? {:store (:store state)})]
    (do
      (print-load-game)
      (let [choice (read-line)]
        (case choice
          "1" (merge state (assoc game :screen :game))
          "2" (assoc state :screen :select-game-mode)
          (retry-load-game state))))
    (assoc state :screen :select-game-mode)))

(declare dispatch-id)
(defn retry-dispatch-id [store]
  (do
    (println "Game not found! Let's try that again.")
    (dispatch-id store)))

(defn dispatch-id [{:keys [store] :as _state}]
  (println "Please enter your game ID: ")
  (let [id-str (read-line)
        id (Integer/parseInt id-str)
        game (db/find-game-by-id {:store store} id)]
    (if (nil? game)
      (retry-dispatch-id store)
      (assoc game :screen :replay))))

(declare watch-replay?)
(defn retry-watch-replay [store]
  (do
    (println "Bad input, try again.")
    (watch-replay? store)))

(defn watch-replay? [state]
  (if (db/previous-games? {:store (:store state)})
    (do
      (println "Would you like to watch a replay?
  You'll need a match ID.
  1: Yes
  2: No")
      (let [choice (read-line)]
        (case choice
          "1" (assoc state :screen :replay-id-entry)
          "2" (assoc state :screen :in-progress-game)
          (retry-watch-replay state))))
    (assoc state :screen :in-progress-game)))

(defn cli-loop [state]
  (loop [state state]
    (let [new-state (case (:screen state)
                      :select-game-mode (select-game state)
                      :select-board (select-board state)
                      :select-difficulty (select-difficulty state)
                      :in-progress-game (load-game state)
                      :replay-confirm (watch-replay? state)
                      :replay-id-entry (dispatch-id state)
                      :replay (replay/replay state)
                      :game (do
                              (printer/game-id (get state :id))
                              (db/clear-active {:store (:store state)})
                              (init/game-loop state))
                      state)]
      (when new-state
        (recur new-state)))))



