(ns tic-tac-toe.configc)


(defn select-difficulty [state choice]
  (let [ai-count (count (filterv #(= :ai %) (:players state)))
        updated-difficulties (conj (vec (:difficulties state)) choice)
        screen (if (< (count updated-difficulties) ai-count)
                 :select-difficulty
                 :game)]
    (-> state
      (assoc :difficulties updated-difficulties)
      (assoc :screen screen))))