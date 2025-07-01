(ns tic-tac-toe.edn
  (:require [clojure.edn :as edn]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(defmethod db/set-new-game-id :file [_store]
  (-> (edn-state)
    (last)
    (get :state)
    (get :id -1)
    (inc)))

(defn file->state [{:keys [state moves] :as _game}]
  (merge state
    {:board (db/play-board state moves)
     :turn  (db/next-player moves)}))

(defmethod db/find-game-by-id :file [_store id]
  (let [previous-games (edn-state)
        game (first (filter #(= id (:id (:state %))) previous-games))]
    (if game
      (file->state game)
      nil)))

(defn update-game-file! [state]
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
  (let [games (edn-state)
        [_ last-game] (last (into (sorted-map) games))
        board (db/play-board (:state last-game) (:moves last-game))]
    (some? (board/check-winner board))))

(defmethod db/previous-games? :file [_store]
  (if-let [games (edn-state)]
    (->> games
      vals
      (map #(db/play-board (:state %) (:moves %)))
      (filter #(nil? (board/check-winner %)))
      empty?)
    false))

(defmethod db/update-previous-games! :file [_store id move]
  (let [state (edn-state)
        previous-games (:previous-games state)
        updated-games (mapv (fn [game]
                              (if (= (:id game) id)
                                (update game :moves conj move)
                                game))
                        previous-games)
        new-state (assoc state :previous-games updated-games)]
    (spit edn-file (prn-str new-state))))

(defn compute-entry [state data]
  (update state :previous-games (fnil conj []) data))

(defmethod db/add-entry-to-previous! :file
  [_store data]
  (let [state (edn-state)
        updated (compute-entry state data)]
    (spit edn-file (prn-str updated))))



(defmethod db/clear-current-game! :file [_store]
  (spit edn-file (dissoc (edn-state) :current-game)))
