(ns tic-tac-toe.persistence
  (:require [tic-tac-toe.board :as board]))

;; TODO ARC - Refactor turn in game logic
(defn next-player [moves]
  (if (= (:player (last moves)) "X") "p2" "p1"))

(defn play-board [game moves]
  (reduce (fn [acc move] (assoc acc (:position move) [(:player move)]))
    (board/get-board (keyword (:board-size game)))
    moves))

(defn file->state [{:keys [state moves] :as _game}]
  (merge state
    {:store :file
     :board (play-board state moves)
     :turn  (next-player moves)
     :moves moves
     :markers ["X" "O"]}))

(def mem-db (atom {}))

(defmulti set-new-game-id :store)

(defmethod set-new-game-id :mem [_store]
  (-> @mem-db
    (last)
    (second)
    (get :state)
    (get :id -1)
    (inc)))

(defmulti find-game-by-id :store)

(defmethod find-game-by-id :mem [_store id]
  (let [previous-games @mem-db
        game (first (filter #(= id (:id (:state %))) previous-games))]
    (if game
      (file->state game)
      nil)))

(defmulti update-current-game!
  (fn [state _move]
    (:store state)))

(defn- init-new-game [games state move]
  (reset! mem-db (assoc games
                   :current-game-id (:id state)
                   (:id state) {:state (dissoc state :board :markers :turn :store)
                                :moves [{:player (first (get (:board state) move)) :position move}]})))

(defn- update-game [current-game state move games current-id]
  (println "updating game" state)
  (let [updated-game (update current-game :moves conj {:player (first (get (:board state) move)) :position move})]
    (reset! mem-db (assoc games
                     current-id
                     updated-game))))

(defmethod update-current-game! :mem [state move]
  (let [games @mem-db
        current-id (:current-game-id games)
        current-game (get games current-id)
        board (play-board (:state current-game) (:moves current-game))]
    (if (or (not= current-id (:id state)) (some? (board/check-winner board)) (nil? current-game))
      (init-new-game games state move)
      (update-game current-game state move games current-id))))

#_(defmethod update-current-game! :mem [state move]
  (let [games @mem-db
        [_ last-game] (last (into (sorted-map) games))
        board (play-board (:state last-game) (:moves last-game))]
    (if (or (some? (board/check-winner board)) (empty? last-game))
      (reset! mem-db (assoc games
                       (:id state) {:state (dissoc state :board :markers :turn :store)
                                    :moves [{:player (first (get (:board state) move)) :position move}]}))
      (let [updated-game (update last-game :moves conj {:player (first (get (:board state) move)) :position move})]
        (reset! mem-db (assoc games
                         (:id state)
                         updated-game))))))

(defmethod update-current-game! :default [state _move]
  (update-current-game! (assoc state :store :mem) 0))

(defmulti update-previous-games!
  (fn [store _id _move]
    store))

(defmethod update-previous-games! :mem [_store id move]
  (let [games (:previous-games @mem-db)
        updated (mapv (fn [game]
                        (if (= (:id game) id)
                          (update game :moves conj move)
                          game))
                  games)]
    (reset! mem-db {:previous-games updated})))

(defmulti in-progress? :store)

(defmethod in-progress? :mem [_store]
  (let [games @mem-db
        current-id (:current-game-id games)
        game (get games current-id)
        board (play-board (:state game) (:moves game))]
    (when (and (not (board/check-winner board)) game)
      (file->state game))))

(defmulti previous-games? :store)

(defmethod previous-games? :mem [_store]
  (if-let [games @mem-db]
    (->> games
      vals
      (map #(play-board (:state %) (:moves %)))
      (filter #(nil? (board/check-winner %)))
      empty?)
    false))




