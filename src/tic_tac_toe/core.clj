(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board  [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn winner? [coll]
  (every? false? (map #(contains? winning-moves %) coll)))

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn ai-turn [b]
  (rand-int (count (filter #(true? %) (map #(empty? (first %)) b)))))
;x (read-line)
(defn init-game []
  (loop [b board turn "ai"]
    (println b)
    (if (= "player" turn)
      [(winner? b) (tie-game? b)]
      (if (= "ai" turn)
        (recur (assoc b (ai-turn b) ["O"]) "player")))))

(defn -main [& args]
  (let [x (read-line)]
    x))

