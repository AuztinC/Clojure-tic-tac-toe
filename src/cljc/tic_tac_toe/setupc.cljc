(ns tic-tac-toe.setupc)

;(instance? clojure.lang.IAtom n)
(defmulti select-difficulty!
  (fn [state _choice]
    (let [actual-state (if (satisfies? IDeref state) @state state)]
      (:ui actual-state))))

;(defonce state (r/atom starting-state))
;
;(defmethod db/update-current-game! :ratom [new-state]
;  (reset! state new-state))
;
;(defmethod setupc/select-difficulty! :web-cljs [state choice]
;  (let [ai-count (count (filterv #(= :ai %) (:players @state)))
;        updated-difficulties (conj (vec (:difficulties @state)) choice)]
;    (if (< (count updated-difficulties) ai-count)
;      (db/update-current-game! (assoc @state :difficulties updated-difficulties))
;      (db/update-current-game! (assoc @state :difficulties updated-difficulties :screen :game)))))
;
;(defn sleep [fn t]
;  (js/setTimeout fn t))
;
;(defn game-over? [winner? new]
;  (if winner?
;    (do
;      (db/update-current-game! (game/next-state new))
;      (db/update-current-game! (assoc (game/next-state new) :screen :game-over)))
;    (db/update-current-game! (game/next-state new))))
