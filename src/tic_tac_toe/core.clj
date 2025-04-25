(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board ["\n"
            [""] [""] [""] "\n"
            [""] ["x"] [""] "\n"
            ["x"] [""] [""] "\n"])
(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn testinput []
  (let [nboard board]
  (println nboard)
  (flush)
  (def x (read-line))
  (str/replace (nth nboard (read-string x)) "" "x")
  (flush)
  (println nboard)))



