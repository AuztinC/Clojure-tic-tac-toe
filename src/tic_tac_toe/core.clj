(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn check-winner [b]
  (let [wm->board (for [wm winning-moves] (reduce (fn [acc x] (conj acc (nth b x))) [] wm))]
    (let [winner-result
          (first (flatten
                   (filter #(if (and
                                  (not= "" (first (first %)))
                                  (every? #{(first %)} %))
                              (first %) false)
                     wm->board)))]
      (if winner-result
        winner-result
        (if (tie-game? b) "tie" nil))))
  )
(def scores {"X" -1 "O" 1 "tie" 0})

(defn minimax [b isMax? depth]                              ;I want to return index of chosen position
  (let [result (check-winner b)]
    (if result
      (get scores result)
      (if isMax?
        (let [best-score ##-Inf]
          (loop [b b positions (filter #(not= nil %)
                                        (map-indexed
                                          (fn [idx itm] (when (= [""] itm) idx)) b))
                 score (minimax (assoc b (first positions) ["O"]) false (inc depth))]
            ;(println b)
            (if (and score (< best-score score))
              score
              (recur
                (assoc b (first positions) ["O"])
                (rest positions)
                (minimax (assoc b (first (rest positions)) ["O"]) false (inc depth))))))
        (let [best-score ##Inf]
          (loop [b b positions (filter #(not= nil %)
                                 (map-indexed
                                   (fn [idx itm] (when (= [""] itm) idx)) b))
                 score (minimax (assoc b (first positions) ["X"]) true (inc depth))]
            ;(println b)
            (if (and score (> best-score score))
              score
              (recur
                (assoc b (first positions) ["X"])
                (rest positions)
                (minimax (assoc b (first (rest positions)) ["X"]) true (inc depth))))))))))

(defn ai-turn [b]
  ())

(defn init-game []
  (loop [b board turn "ai"]
    (println b)
    (if (or (check-winner b))
      (println "game over")
      (if (= "player" turn)
        (recur (assoc b (Integer/parseInt (read-line)) ["X"]) "ai")
        (recur (assoc b (ai-turn b) ["O"]) "player")))))

(defn -main [& args]
  (let [x (read-line)]
    x))

