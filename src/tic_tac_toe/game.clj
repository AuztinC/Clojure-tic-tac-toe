(ns tic-tac-toe.game
  (:require [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defmulti play-turn (fn [_store _id _board [_ player-type] & _] player-type))

(defn next-player [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn ->players
  [turn player1-marker player1-type player2-marker player2-type]
  (if (= "p1" turn)
    [player1-marker player1-type]
    [player2-marker player2-type]))

(defn ->difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if (= :ai player-type) (first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn end-game! [id board store]
  (let [id id]
    (printer/display-board board)
    (printer/output-result (board/check-winner board))
    (printer/game-id id)
    (db/clear-current-game! {:store store})))

(defn next-state [state]
  (let [{board :board,
         [player1-type player2-type] :players
         [player1-marker player2-marker] :markers,
         difficulties :difficulties
         turn :turn
         id :id
         store :store} state]
    (let [[marker player-type :as player] (->players turn
                                             player1-marker player1-type
                                             player2-marker player2-type)
          difficulty (->difficulties turn player-type difficulties)
          move (play-turn store id board player difficulty)
          next-state (assoc state :board (assoc board move [marker]) :turn (next-player turn))]
      (do
        (db/update-current-game! next-state move)
        next-state))))

(defn game-loop [state]
  (loop [{:keys [board store id] :as state} state]
    (if (board/check-winner board)
      (end-game! id board store)
      (do
        (printer/display-board board)
        (recur (next-state state))))))

(defn init-game [state]
  (let [data {:id (:id state)
              :moves []
              :board-size (case (count (:board state))
                            9 :3x3
                            16 :4x4
                            :3x3x3)}]
    (do
      #_(db/update-current-game! state)
      (db/add-entry-to-previous! (:store state) data)
      (printer/game-id (get data :id))
      (game-loop state))))

(defn resume-game [store]
  (game-loop (db/in-progress? {:store store})))

