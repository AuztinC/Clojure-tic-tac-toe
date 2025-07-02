(ns tic-tac-toe.edn
  (:require [clojure.edn :as edn]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(defn ->inspect [x]
  (prn "->inspect: " x) x)

(defmethod db/set-new-game-id :file [_store]
  (-> (edn-state)
    (into (sorted-map))
    (last)
    (second)
    (get :state)
    (get :id -1)
    (inc)))

(defmethod db/find-game-by-id :file [_store id]
  (let [previous-games (edn-state)
        game (get previous-games id)]
    (if game
      (db/file->state game)
      nil)))

#_(defn update-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :current-game state)
      (prn-str))))

(defmethod db/update-current-game! :file [state move]
  (let [games (edn-state)
        [_ last-game] (last (into (sorted-map) games))
        board (db/play-board (:state last-game) (:moves last-game))]
    (if (or (some? (board/check-winner board)) (empty? last-game))
      (spit edn-file (assoc games
                       (:id state) {:state (dissoc state :board :markers :turn :store)
                                    :moves [{:player (first (get (:board state) move)) :position move}]}))
      (let [updated-game (update last-game :moves conj {:player (first (get (:board state) move)) :position move})]
        (spit edn-file (assoc games
                         (:id state)
                         updated-game))))))


(defmethod db/in-progress? :file [_store]
  (when-let [games (edn-state)]
    (let [[_ last-game] (last (into (sorted-map) games))
          board (db/play-board (:state last-game) (:moves last-game))]
      (when-not (board/check-winner board)
        (db/file->state last-game)))))


(defmethod db/previous-games? :file [_store]
  (if-let [games (edn-state)]
    (->> games
      vals
      (map #(db/play-board (:state %) (:moves %)))
      (filter board/check-winner)
      seq)
    false))


