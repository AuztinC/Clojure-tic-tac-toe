(ns tic-tac-toe.edn
  (:require [clojure.edn :as edn]
            [tic-tac-toe.persistence :as db]))

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(defmethod db/set-new-game-id :file [_store]
  (-> (edn-state)
    (get :previous-games)
    (last)
    (get :id 0)
    (inc)))

(defmethod db/find-game-by-id :file [_store id]
  (let [previous-games (get (edn-state) :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defn update-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :current-game state)
      (prn-str))))

(defmethod db/update-current-game! :file [state]
  (update-game-file! state))

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

(defmethod db/in-progress? :file [_store]
  (get (edn-state) :current-game))

(defmethod db/previous-games? :file [_store]
  (get (edn-state) :previous-games))

(defmethod db/clear-current-game! :file [_store]
  (spit edn-file (dissoc (edn-state) :current-game)))
