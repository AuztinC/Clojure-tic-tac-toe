(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])


(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn winner? [b]
  (let [wm->board (for [wm winning-moves] (reduce (fn [acc x] (conj acc (nth b x))) [] wm))]
    (let [winner-result (first (first (first
                    (filter #(if (and (not= "" (first (first %))) (every? #{(first %)} %))
                               (first %) false)
                      wm->board))))]
      (if winner-result
        winner-result
        (tie-game? b)))


    #_(first (first (filter #(coll? %) (reduce
                                         (fn [acc x]
                                           (conj acc
                                             (if (and (not= "" (first (first x))) (every? #{(first x)} x))
                                               (first x)
                                               false)))
                                         [] wm->board)))))
  )



(defn ai-turn [b]
  (rand-int (count (filter #(true? %) (map #(empty? (first %)) b)))))

(defn init-game []
  (loop [b board turn "ai"]
    (println b)
    (if (or (winner? b) (tie-game? b))
      (println "game over")
      (if (= "player" turn)
        (recur (assoc b (Integer/parseInt (read-line)) ["X"]) "ai")
        (recur (assoc b (ai-turn b) ["O"]) "player")))))

(defn -main [& args]
  (let [x (read-line)]
    x))

