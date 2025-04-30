(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(def winner-result (fn [b] (first (filter #(and
                                             (not= "" (first %))
                                             (every? #{(first %)} %)) b))))

(defn check-winner [b]
  (let [wm->board (for [wm winning-moves] (map #(first (nth b %)) wm))]
    (let [winner-result (winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (tie-game? b) "tie" nil))))
  )
(def scores {"X" -10 "O" 10 "tie" 0})

(defn open-positions [b]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) b)))

(declare score-board)
(defn- minimax [b maximizing? depth]
  (let [spec {true  {:extrema-fn max :extreme ##-Inf :marker "O"}
              false {:extrema-fn min :extreme ##Inf :marker "X"}}
        {:keys [extrema-fn extreme marker]} (spec maximizing?)
        ]
    (loop [positions (open-positions b) best-score extreme]
      (if (empty? positions)
        best-score
        (let [new-b (assoc b (first positions) [marker])
              score (score-board new-b (not maximizing?) (inc depth))]
          (recur (rest positions) (extrema-fn best-score score)))))))

(defn score-game [result depth]
  (let [score (get scores result)]
    (if (= score 0)
      0
      (- score depth))))

(defn score-board [b maximizing? depth]
  (if-let [result (check-winner b)]
    (score-game result depth)
    (minimax b maximizing? depth)))

(defn winner->block [b]
  (some (fn [m]
          (some (fn [pos]
                  (let [new-b (assoc b pos [m])]
                    (when (= m (check-winner new-b))
                      pos)))
            (open-positions b)))
    ["O" "X"]))

(defn ai-turn [b]
  (let [open (open-positions b)]
    (if-let [best-move (winner->block b)]
      best-move
      (loop [positions open
             best-pos -1
             best-score ##-Inf]
        (if (empty? positions)
          best-pos
          (let [pos (first positions)
                new-b (assoc b pos ["O"])
                score (score-board new-b false 0)]
            (if (> score best-score)
              (recur (rest positions) pos score)
              (recur (rest positions) best-pos best-score))))))))

(defn output-result [winner]
  (if (= "O" winner)
    (println (str winner " is the winner!"))
    (println "tie game")))

(defn init-game []
  (loop [b board turn "player" winner (check-winner b)]
    (run! println (partition 3 b))
    (if winner
      (output-result winner)
      (if (= "player" turn)
        (let [move (Integer/parseInt (read-line))
              new-b (assoc b move ["X"])]
          (recur new-b "ai" (check-winner new-b)))
        (let [ai-move (ai-turn b)
              new-b (assoc b ai-move ["O"])]
          (recur new-b "player" (check-winner new-b)))))))



(defn -main [& args]
  (init-game))

