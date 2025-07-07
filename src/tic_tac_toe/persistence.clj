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
                   (:id state) {:state (dissoc state :board :markers :turn :store)
                                :moves [{:player (first (get (:board state) move)) :position move}]})))

(defn- update-game [current-game state move games]
  (let [updated-game (update current-game :moves conj {:player (first (get (:board state) move)) :position move})]
    (reset! mem-db (assoc games
                     (:id state)
                     updated-game))))

(defmethod update-current-game! :mem [state move]
  (let [games @mem-db
        current-game (second (first (filter #(= (:active-game (:state (second %))) true) games)))
        winner? (board/check-winner (assoc (:board state) move [(first (get (:board state) move))]))]
    (if (nil? current-game)
      (init-new-game games state move)
      (if winner?
        (update-game (assoc-in current-game [:state :active-game] false) state move games)
        (update-game current-game state move games)))))

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

(defmulti in-progress? (fn [state] (:store state)) )

(defmethod in-progress? :mem [_state]
  (let [games @mem-db
        current-id (:current-game-id games)
        game (get games current-id)
        board (play-board (:state game) (:moves game))]
    (when (and (not (board/check-winner board)) games)
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

(defmulti clear-active :store)

(defmethod clear-active :mem [_store]
  (when-let [games @mem-db]
    (let [current (second (first (filter #(= (:active (:state (second %))) true) games)))
          parsed (file->state current)
          updated (assoc parsed :active false)]
      (reset! mem-db
        (assoc games
          (:id updated)
          updated)))))




