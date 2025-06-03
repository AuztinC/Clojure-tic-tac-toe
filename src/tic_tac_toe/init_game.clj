(ns tic-tac-toe.init-game
  (:require [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.ai-turn :as ai]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(def stored-moves (atom []))

(defmulti play-turn (fn [_board _move-fn [_ player-type] & _] player-type))

(defn record-move! [marker move]
  (let [entry {:player marker
               :move move}]
    (swap! stored-moves conj entry)))

(defmethod play-turn :human [board move-fn [marker _] _]
  (let [move (move-fn board marker)]
    (record-move! marker move)
    (assoc board move [marker])))

(defmethod play-turn :ai [board move-fn [marker _] diff]
  (let [move (move-fn board marker diff)]
    (do
      (record-move! marker move)
      (assoc board move [marker]))))

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

(defn end-game! [board store]
  (let [new-id (inc (get (last (get (db/edn-state) :previous-games)) :id 0))
        data {:id new-id
              :moves @stored-moves
              :board-size (case (count board)
                            9 :3x3
                            16 :4x4
                            :3x3x3)}]
    (reset! stored-moves [])
    (db/update-previous-games! data)
    (printer/output-result (board/check-winner board))
    (printer/game-id (get data :id))
    (db/clear! store)))

(defn game-loop [state]
  (let [{board :board, [player1-type player2-type] :players,
         [player1-marker player2-marker] :markers, difficulties :difficulties
         store :store turn :turn} state]
    (loop [board board
           turn turn]
      (printer/display-board board)
      (if (board/check-winner board)
        (end-game! board store)
        (let [[_marker player-type :as player] (->players turn
                                                 player1-marker player1-type
                                                 player2-marker player2-type)
              player-fn (->player-fn player-type)
              difficulty (->difficulties turn player-type difficulties)
              new-board (play-turn board player-fn player difficulty)
              next-state (assoc state :board new-board)]
          (do
            (db/update-game! next-state)
            (recur new-board
              (next-player turn))))))))

(defn init-game [state]
  (do
    (db/update-game! state)
    (game-loop state)))

(defn resume-game []
  (let [state (get (db/edn-state) :current-game)
        turn (case (odd? (count (board/open-positions (get state :board))))
               true "p1"
               false "p2")
        next-state (assoc state :turn turn)]
    (game-loop next-state)))

