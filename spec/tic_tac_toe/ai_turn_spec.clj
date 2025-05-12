(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-turn :as sut]))
(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(describe "ai-turn"
(context "difficulty functions"
  (it "hard runs minimax, returns best position"
    (let [temp-board [["X"] ["X"] [""] [""] ["O"] [""] [""] [""] [""]]]
      (should= 2 (sut/hard temp-board "O" (sut/open-positions temp-board)))))
  (it "easy returns random open position"
    (with-redefs [rand-nth (constantly 1)]
      (should= 1 (sut/easy (sut/open-positions board)))))
  (it "medium can give hard"
    (with-redefs [rand-int (fn [& _] 0)
                  sut/hard (fn [& _] 5)]
      (should= 5 (sut/medium board "O" (sut/open-positions board)))))
  (it "medium can give easy"
    (with-redefs [rand-int (fn [& _] 1)
                  sut/easy (fn [& _] 3)]
      (should= 3 (sut/medium board "O" (sut/open-positions board)))))
  )

(context "ai-moves"
  (it "blank board gives 0"
    (should= 0 (sut/ai-turn board "O" :hard)))
  (it "plays center asap"
    (should= 4 (sut/ai-turn [["X"] [""] [""]
                             [""] [""] [""]
                             [""] [""] [""]] "O" :hard)))
  (it "defends against player win"
    (should= 2 (sut/ai-turn [["X"] ["X"] [""]
                             [""] ["O"] [""]
                             [""] [""] [""]] "O" :hard))
    (should= 6 (sut/ai-turn [["X"] [""] [""]
                             ["X"] ["O"] [""]
                             [""] [""] [""]] "O" :hard))
    (should= 5 (sut/ai-turn [["O"] [""] [""]
                             ["X"] ["X"] [""]
                             [""] [""] [""]] "O" :hard)))))