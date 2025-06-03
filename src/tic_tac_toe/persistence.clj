(ns tic-tac-toe.persistence
  (:require [clojure.edn :as edn]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (edn/read-string (slurp edn-file)))

(defn set-new-game-id []
  (-> (edn-state)
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(def mem-db (atom {}))

(defn update-game-file!
  [board player1-type player2-type player1-marker player2-marker difficulties turn]
  (spit edn-file
    (prn-str (assoc (edn-state)
               :current-game {:board board
                              :players [player1-type player2-type]
                              :markers [player1-marker player2-marker]
                              :difficulties difficulties
                              :turn turn
                              :store :file}))))

(defn update-atom!
  [board player1-type player2-type player1-marker player2-marker difficulties turn]
  (reset! mem-db (assoc @mem-db
                   :current-game {:board board
                                  :players [player1-type player2-type]
                                  :markers [player1-marker player2-marker]
                                  :difficulties difficulties
                                  :turn turn})))

(defn update-game! [state]
  (let [{board :board, [player1-type player2-type] :players,
         [player1-marker player2-marker] :markers, difficulties :difficulties
         store :store turn :turn} state
        storage? (nil? (get state :store))
        new-store (if storage? :mem store)
        next-state (assoc state :store new-store)]
    (case store
      :file (update-game-file! board player1-type player2-type player1-marker player2-marker difficulties turn)
      :mem (update-atom! board player1-type player2-type player1-marker player2-marker difficulties turn)
      (update-game! next-state))))

(defn update-previous-games! [store data]
  (let [state (edn-state)
        updated (update state :previous-games (fnil conj []) data)]
    (spit edn-file (prn-str updated))))

(defn in-progress? []
  (get (edn-state) :current-game))

(defn previous-games? []
  (get (edn-state) :previous-games))

(defn clear! [store]
  (case store
    :file (spit edn-file (dissoc (edn-state) :current-game))
    :mem (reset! mem-db {})
    (clear! :mem)
    ))

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
