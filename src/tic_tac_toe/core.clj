(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn check-winner [b]
  (let [wm->board (for [wm winning-moves] (map #(first (nth b %)) wm))]
    (let [winner-result
          (first (filter #(and
                            (not= "" (first %))
                            (every? #{(first %)} %))
                   wm->board))]
      (if winner-result
        (first winner-result)
        (if (tie-game? b) "tie" nil))))
  )
(def scores {"X" -1 "O" 1 "tie" 0})

(def open-positions (fn [b] (filter #(not= nil %)
                              (map-indexed
                                (fn [idx itm] (when (= "" (first itm)) idx)) b))))

(defn minimax [b isMax? depth]
  (let [result (check-winner b)]
    (if result
      (let [score (get scores result)]
        (if (= score 0)
          0
          (- score depth)))
      (if isMax?
        (loop [positions (open-positions b) best-score ##-Inf]
          (if (empty? positions)
            best-score
            (let [new-b (assoc b (first positions) ["O"])
                  score (minimax new-b false (inc depth))]
              (recur (rest positions) (max best-score score)))))
        (loop [positions (open-positions b) best-score ##Inf]
          (if (empty? positions)
            best-score
            (let [new-b (assoc b (first positions) ["X"])
                  score (minimax new-b true (inc depth))]
              (recur (rest positions) (min best-score score)))))))))

(defn ai-turn [b]
  (let [open (open-positions b)]
    (if-let [winning-move
             (some (fn [pos]
                     (let [new-b (assoc b pos ["O"])]
                       (when (= "O" (check-winner new-b))
                         pos)))
               open)]
      winning-move
      (if-let [block-move
               (some (fn [pos]
                       (let [new-b (assoc b pos ["X"])]
                         (when (= "X" (check-winner new-b))
                           pos)))
                 open)]
        block-move
        (loop [positions open
               best-pos -1
               best-score ##-Inf]
          (if (empty? positions)
            best-pos
            (let [pos (first positions)
                  new-b (assoc b pos ["O"])
                  score (minimax new-b false 0)]
              (if (> score best-score)
                (recur (rest positions) pos score)
                (recur (rest positions) best-pos best-score)))))))))

(defn init-game []
  (loop [b board turn "player" winner (check-winner b)]
    (run! println (partition 3 b))
    (if winner
      (println (str winner " is the winner!"))
      (if (= "player" turn)
        (let [move (Integer/parseInt (read-line))
              new-b (assoc b move ["X"])]
          (recur new-b "ai" (check-winner new-b)))
        (let [ai-move (ai-turn b)
              new-b (assoc b ai-move ["O"])]
          (recur new-b "player" (check-winner new-b)))))))

(defn -main [& args]
  (init-game))

