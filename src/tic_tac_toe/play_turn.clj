(ns tic-tac-toe.play-turn)

(defmulti play-turn
  (fn [board marker move-fn & [diff]]
    (if (some? diff)
      :ai
      :human)))

(defmethod play-turn :human [board marker move-fn _]
  (let [move (move-fn board marker)]
    (assoc board move [marker])))

(defmethod play-turn :ai [board marker move-fn diff]
  (let [move (move-fn board marker diff)]
    (assoc board move [marker])))