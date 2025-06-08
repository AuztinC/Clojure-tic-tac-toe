(ns tic-tac-toe.persistence
  (:require [clojure.edn :as edn]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(defn set-new-game-id []
  (-> (edn-state)
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(def mem-db (atom {}))

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

(defn update-previous-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :previous-games state)
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

#_(defn update-game! [state]
    (let [{store :store} state]
      (case store
        :file (update-game-file! state)
        :mem (update-atom! state)
        (update-current-game! :mem))))

(defn update-previous-games! [store id move]
  (case store
    :file (let [state (edn-state)
                previous-games (:previous-games state)
                updated-games (mapv (fn [game]
                                      (if (= (:id game) id)
                                        (update game :moves conj move)
                                        game))
                                previous-games)
                new-state (assoc state :previous-games updated-games)]
            (spit edn-file (prn-str new-state)))

    :mem (let [games (:previous-games @mem-db)
               updated (mapv (fn [game]
                               (if (= (:id game) id)
                                 (update game :moves conj move)
                                 game))
                         games)]
           (reset! mem-db {:previous-games updated}))))

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

#_(defn update-previous-games! [store data]
    (let [state (edn-state)
          updated (update state :previous-games (fnil conj []) data)]
      (case store
        :file (spit edn-file (prn-str updated))
        :mem (reset! mem-db (assoc @mem-db
                              :previous-games updated))
        (add-entry-to-previous! :mem data))))

(defn in-progress? []
  (get (edn-state) :current-game))

(defn previous-games? []
  (get (edn-state) :previous-games))

(defmulti clear! :store)

(defmethod clear! :file [_store]
  (spit edn-file (dissoc (edn-state) :current-game)))

(defmethod clear! :mem [_store]
  (reset! mem-db {}))

(defmethod clear! :default [_store]
  (clear! {:store :mem}))

#_(defn clear! [store]
    (case store
      :file (spit edn-file (dissoc (edn-state) :current-game))
      :mem (reset! mem-db {})
      (clear! :mem)))

;(defprotocol Db
;  (clear [_this]))
;(deftype FileDb
;  Db
;  (clear [_this]
;    (spit ...)))
;
;(defmulti clear :store)
;(defmethod clear :file [state]
;  (...))
;(defmethod clear :pgsql [state]
;  (...))

;
