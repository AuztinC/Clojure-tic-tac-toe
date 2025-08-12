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

(def game-modes
  {1 [:human :ai]
   2 [:ai :human]
   3 [:human :human]
   4 [:ai :ai]})

(defn select-game [state choice]
  (let [mode (get game-modes choice)]
    (if mode
      (-> state
        (assoc :players mode)
        (assoc :screen :select-board))
      state)))


(def select-board-size
  {1 :3x3
   2 :4x4
   3 :3x3x3})