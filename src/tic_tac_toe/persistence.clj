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

(defn update-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :current-game state)
      (prn-str))))

(defn update-atom! [state]
  (reset! mem-db (assoc @mem-db :current-game state)))

(defn update-game! [state]
  (let [{store :store} state]
    (case store
      :file (update-game-file! state)
      :mem (update-atom! state)
      (update-game! :mem))))

(defn update-previous-games! [store data]
  (let [state (edn-state)
        updated (update state :previous-games (fnil conj []) data)]
    (case store
      :file (spit edn-file (prn-str updated))
      :mem (reset! mem-db (assoc @mem-db
                            :previous-games updated))
      (update-previous-games! :mem data))))

(defn in-progress? []
  (get (edn-state) :current-game))

(defn previous-games? []
  (get (edn-state) :previous-games))

(defn clear! [store]
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
