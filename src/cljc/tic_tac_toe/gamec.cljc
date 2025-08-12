(ns tic-tac-toe.gamec
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defn position-dispatch [{:keys [ui] :as _state} [_ player-type] & _]
  [player-type ui])
(defmulti next-position position-dispatch)

(defn empty-space? [board move]
  (= [""] (get board move)))

(defn next-player [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn next-player-key [{:keys [turn players] :as _state}]
  (case turn
    "p1" (first players)
    "p2" (second players)))

(defn ->players
  [{:keys [turn players]}]
  (let [[p1-type p2-type] players]
    (if (= "p1" turn)
      ["X" p1-type]
      ["O" p2-type])))

(defn ->difficulties [{:keys [turn difficulties] :as _state} player-type]
  (if (= 1 (count difficulties))
    (if (= :ai player-type) (first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn current-player-type [{:keys [players turn]}]
  (if (= turn "p1") (first players) (second players)))

(defn current-marker [{:keys [markers turn]}]
  (if (= turn "p1") (first markers) (second markers)))

(defn next-state [state move]
  (if (board/check-winner (:board state))
    (assoc state :screen :game-over)
    (let [{board :board,
           turn  :turn} state
          [marker] (->players state)
          next-state (assoc state :board (assoc board move [marker]) :turn (next-player turn))]
      #_(db/update-current-game! next-state move)
      next-state)))