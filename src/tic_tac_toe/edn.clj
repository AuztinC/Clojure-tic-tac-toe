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

(defn- init-new-game [games state move]
  (spit edn-file (assoc games
                   :current-game-id (:id state)
                   (:id state) {:state (dissoc state :board :markers :turn :store)
                                :moves [{:player (first (get (:board state) move)) :position move}]})))

(defn- update-game [current-game state move games current-id]
  (println "updating game" state)
  (let [updated-game (update current-game :moves conj {:player (first (get (:board state) move)) :position move})]
    (spit edn-file (assoc games
                     current-id
                     updated-game))))

(defmethod db/update-current-game! :file [state move]
  (let [games (edn-state)
        current-id (:current-game-id games)
        current-game (get games current-id)
        board (db/play-board (:state current-game) (:moves current-game))]
    (if (or (not= current-id (:id state)) (some? (board/check-winner board)) (nil? current-game))
      (init-new-game games state move)
      (update-game current-game state move games current-id))))

(defmethod db/in-progress? :file [_store]
  (when-let [games (edn-state)]
    (let [current-id (:current-game-id games)
          game (get games current-id)
          board (db/play-board (:state game) (:moves game))]
      (when (and game (not (board/check-winner board)))
        (db/file->state game)))))

(defmethod db/previous-games? :file [_store]
  (if-let [games (edn-state)]
    (->> games
      vals
      (map #(db/play-board (:state %) (:moves %)))
      (filter board/check-winner)
      seq)
    false))


