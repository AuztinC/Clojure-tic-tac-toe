(ns tic-tac-toe.persistence
  (:require [clojure.edn :as edn]
            [cheshire.core :as json]
            [clojure.java.jdbc :as jdbc]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(def mem-db (atom {}))

(defmulti set-new-game-id :store)

(defmethod set-new-game-id :file [_store]
  (-> (edn-state)
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(defmethod set-new-game-id :mem [_store]
  (-> @mem-db
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(defmulti find-game-by-id :store)

(defmethod find-game-by-id :file [_store id]
  (let [previous-games (get (edn-state) :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defmethod find-game-by-id :mem [_store id]
  (let [previous-games (get @mem-db :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defn update-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :current-game state)
      (prn-str))))

(defn update-atom! [state]
  (reset! mem-db (assoc @mem-db :current-game state)))

(defmulti update-current-game!
  (fn [state]
    (:store state)))

(defmethod update-current-game! :file [state]
  (update-game-file! state))

(defmethod update-current-game! :mem [state]
  (update-atom! state))

(defmethod update-current-game! :default [state]
  (update-current-game! (assoc state :store :mem)))

(defmulti update-previous-games!
  (fn [store _id _move]
    store))

(defmethod update-previous-games! :file [_store id move]
  (let [state (edn-state)
        previous-games (:previous-games state)
        updated-games (mapv (fn [game]
                              (if (= (:id game) id)
                                (update game :moves conj move)
                                game))
                        previous-games)
        new-state (assoc state :previous-games updated-games)]
    (spit edn-file (prn-str new-state))))

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

(defmethod add-entry-to-previous! :file
  [_store data]
  (let [state (edn-state)
        updated (compute-entry state data)]
    (spit edn-file (prn-str updated))))

(defmethod add-entry-to-previous! :mem
  [_store data]
  (let [state @mem-db
        updated (compute-entry state data)]
    (reset! mem-db updated)))

(defmethod add-entry-to-previous! :default
    [_store data]
    (add-entry-to-previous! :mem data))

(defmulti in-progress? :store)

(defmethod in-progress? :file [_store]
  (get (edn-state) :current-game))

(defmethod in-progress? :mem [_store]
  nil)

(defmulti previous-games? :store)

(defmethod previous-games? :file [_store]
  (get (edn-state) :previous-games))

(defmethod previous-games? :mem [_store]
  (get @mem-db :previous-games))

(defmulti clear-current-game! :store)

(defmethod clear-current-game! :file [_store]
  (spit edn-file (dissoc (edn-state) :current-game)))

(defmethod clear-current-game! :mem [_store]
  (reset! mem-db {}))

(defmethod clear-current-game! :default [_store]
  (clear-current-game! {:store :mem}))


;psql
(defn clojurify-psql-state [state]
  (-> state
    (.getValue)
    (json/parse-string true)
    (update :players (fn [ps] (mapv keyword ps)))
    (update :difficulties (fn [ds] (mapv keyword ds)))
    (update :store keyword)))


