(ns tic-tac-toe.persistence
  (:require [tic-tac-toe.board :as board]))

;; TODO ARC - Refactor turn in game logic
(defn next-player [moves]
  (if (= (:player (last moves)) "X") "p2" "p1"))

(defn play-board [game moves]
  (reduce (fn [acc move] (assoc acc (:position move) [(:player move)]))
    (board/get-board (keyword (:board-size game)))
    moves))

(def mem-db (atom {}))

(defmulti set-new-game-id :store)

(defmethod set-new-game-id :mem [_store]
  (-> @mem-db
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(defmulti find-game-by-id :store)

(defmethod find-game-by-id :mem [_store id]
  (let [previous-games (get @mem-db :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defn update-atom! [state]
  (reset! mem-db (assoc @mem-db :current-game state)))

(defmulti update-current-game!
  (fn [state _move]
    (:store state)))

(defmethod update-current-game! :mem [state _move]
  (update-atom! state))

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

(defn compute-entry [state data]
  (update state :previous-games (fnil conj []) data))

(defmulti add-entry-to-previous!
  (fn [store _data]
    store))

(defmethod add-entry-to-previous! :mem
  [_store data]
  (let [state @mem-db
        updated (compute-entry state data)]
    (reset! mem-db updated)))

(defmethod add-entry-to-previous! :default
    [_store data]
    (add-entry-to-previous! :mem data))

(defmulti in-progress? :store)

(defmethod in-progress? :mem [_store]
  nil)

(defmulti previous-games? :store)

(defmethod previous-games? :mem [_store]
  (get @mem-db :previous-games))

(defmulti clear-current-game! :store)

(defmethod clear-current-game! :mem [_store]
  (reset! mem-db {}))

(defmethod clear-current-game! :default [_store]
  (clear-current-game! {:store :mem}))



