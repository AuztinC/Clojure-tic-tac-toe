(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board (atom [[""] [""] [""] [""] [""] [""] [""] [""] [""]]))

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn winner? [coll]
  (map #(contains? winning-moves %) coll))

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn ai-turn [brd]
  (let [b brd
        ;choice (rand-int (count (filter #(true? %) (map #(empty? (first %)) b))))
        ]
    (deref board))
  )

(defn init-game []
  (let [b board x (read-line)]
    ))

(defn -main [& args]
  (let [x (read-line)]
    x))

