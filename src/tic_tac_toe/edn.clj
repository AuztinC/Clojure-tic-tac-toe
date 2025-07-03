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
  (->> (edn-state)
    (filter (comp number? key))
    (map (comp #(get-in % [:state :id] -1) val))
    (apply max -1)
    inc))

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
        current-id (:current-game-id games)
        current-game (get games current-id)
        board (db/play-board (:state current-game) (:moves current-game))]
    (if (or (not= current-id (:id state)) (some? (board/check-winner board)) (nil? current-game))
      (do
        (spit edn-file (assoc games
                         :current-game-id (:id state)
                         (:id state) {:state (dissoc state :board :markers :turn :store)
                                      :moves [{:player (first (get (:board state) move)) :position move}]}
                         )))
      (let [updated-game (update current-game :moves conj {:player (first (get (:board state) move)) :position move})]
        (spit edn-file (assoc games
                         current-id
                         updated-game))))))


(defmethod db/in-progress? :file [_store]
  (when-let [games (edn-state)]
    (let [current-id (:current-game-id games)
          game (get games current-id)
          [_ last-game] (last (into (sorted-map)
                                (filter (comp number? key) games)))
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


