(ns tic-tac-toe.persistence
  (:require [clojure.edn :as edn]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (edn/read-string (slurp edn-file)))

(def mem-db (atom {}))

(defn update-game-file!
  [board player1-type player2-type player1-marker player2-marker difficulties turn]
  (spit edn-file
    (prn-str (assoc (edn-state)
               :current-game {:board        board
                              :players      [player1-type player2-type]
                              :markers      [player1-marker player2-marker]
                              :difficulties difficulties
                              :turn         turn}))))

(defn update-atom!
  [board player1-type player2-type player1-marker player2-marker difficulties turn]
  (reset! mem-db (assoc @mem-db
                   :current-game {:board        board
                                  :players      [player1-type player2-type]
                                  :markers      [player1-marker player2-marker]
                                  :difficulties difficulties
                                  :turn         turn})))

(defn update-game!
  [store board player1-type player2-type player1-marker player2-marker difficulties turn]
  (case store
    :file (update-game-file! board player1-type player2-type player1-marker player2-marker difficulties turn)
    :mem (update-atom! board player1-type player2-type player1-marker player2-marker difficulties turn)
    (update-game! :mem board player1-type player2-type player1-marker player2-marker difficulties turn)))

(defn in-progress? []
  (get (edn-state) :current-game))

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



(defn clear! [store]
  (case store
    :file (spit edn-file (dissoc (edn-state) :current-game))
    :mem (reset! mem-db {})
    (clear! :mem)
    ))
