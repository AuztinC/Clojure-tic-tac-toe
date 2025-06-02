(ns tic-tac-toe.init-game
  (:require [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.ai-turn :as ai]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defmulti play-turn (fn [_board _move-fn [_ player-type] & _] player-type))

(defmethod play-turn :human [board move-fn [marker _] _]
  (let [move (move-fn board marker)]
    (assoc board move [marker])))

(defmethod play-turn :ai [board move-fn [marker _] diff]
  (let [move (move-fn board marker diff)]
    (assoc board move [marker])))

(defn- next-player [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn- ->players
  [turn player1-marker player1-type player2-marker player2-type]
  (if (= "p1" turn)
    [player1-marker player1-type]
    [player2-marker player2-type]))

(defn- ->player-fn [player-type]
  (cond
    (= :human player-type) ht/human-turn
    (= :ai player-type) ai/ai-turn))

(defn- ->difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if (= :ai player-type) (first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn game-loop [store board player1-type player2-type player1-marker player2-marker difficulties turn]
  (loop [board board
         turn turn]
    (printer/display-board board)
    (if (board/check-winner board)
      (do
        (printer/output-result (board/check-winner board))
        (db/clear! :file))
      (let [[_marker player-type :as player] (->players turn
                                               player1-marker player1-type
                                               player2-marker player2-type)
            player-fn (->player-fn player-type)
            difficulty (->difficulties turn player-type difficulties)
            new-board (play-turn board player-fn player difficulty)]
        (do
          (db/update-game! store new-board player1-type player2-type player1-marker player2-marker difficulties turn)
          (recur new-board
            (next-player turn)))))))

(defn init-game [state]
  (let [{board                           :size, [player1-type player2-type] :players,
         [player1-marker player2-marker] :markers, difficulties :difficulties
         store :store turn :turn
         }
        state]
    (do
      (db/update-game! :file board player1-type player2-type player1-marker player2-marker difficulties turn)
      (game-loop store board player1-type player2-type player1-marker player2-marker difficulties turn))))

(defn resume-game []
  (let [{:keys [board players markers difficulties turn store]} (get (db/edn-state) :current-game)
        [player1-type player2-type] players
        [player1-marker player2-marker] markers
        new-game? (= (count board) (count (board/open-positions board)))
        next-turn (if new-game? turn (next-player turn))]
    (game-loop store board player1-type player2-type player1-marker player2-marker difficulties next-turn)))

