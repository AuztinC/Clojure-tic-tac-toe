(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-turn :as sut]
            [tic-tac-toe.board :as board]))

(describe "ai-turn"
  (with-stubs)
  (context "score a board through minimax"
    (it "score-board calls minimax"
      (with-redefs [sut/minimax (stub :minimax {:invoke sut/minimax})]
        (sut/score-board board/get-board true 0 "X")
        (should-have-invoked :minimax)))
    (it "empty"
      (should= 0 (sut/score-board board/get-board false 0 "O")))
    (it "tie game"
      (should= 0 (sut/score-board [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["X"] ["X"] ["O"]] false 0 "O")))
    (it "Player will win"
      (should= -9 (sut/score-board [["X"] ["X"] [""] [""] [""] [""] [""] [""] [""]] false 0 "O")))
    (it "player has fork to win"
      (should= -9 (sut/score-board [["X"] ["X"] [""] ["X"] ["O"] ["O"] [""] [""] [""]] false 0 "O"))
      (should= 9 (sut/score-board [[""] ["O"] [""] ["X"] [""] ["X"] ["X"] ["O"] ["O"]] true 0 "O")))
    (it "ai will win"
      (should= 6 (sut/score-board [[""] [""] [""] [""] [""] [""] ["O"] ["O"] [""]] false 0 "O")))
    (it "ai has fork to win"
      (should= 8 (sut/score-board [["O"] ["X"] [""] ["O"] ["O"] [""] ["X"] [""] [""]] false 0 "O"))
      (should= 8 (sut/score-board [["O"] ["O"] [""] ["O"] [""] ["X"] ["X"] ["O"] ["O"]] false 0 "O")))
    )

  (context "score-minimax-result"
    (it "tie gives 0"
      (should= 0 (sut/score-minimax-result "tie" 1 "O")))
    (it "player gives -10"
      (should= -10 (sut/score-minimax-result "X" 0 "O")))
    (it "ai gives +10"
      (should= 10 (sut/score-minimax-result "O" 0 "O"))))

  (context "difficulty functions"
    (it "hard runs minimax, returns best position"
      (with-redefs [sut/score-board (stub :score-board {:return 0})]
        (sut/hard board/get-board "O" (board/open-positions board/get-board))
        (should-have-invoked :score-board)))

    (it "easy returns random open position"
      (with-redefs [rand-nth (constantly 1)]
        (should= 1 (sut/easy (board/open-positions board/get-board)))))

    (it "medium can give hard"
      (with-redefs [rand-int (fn [& _] 0)
                    sut/hard (fn [& _] 5)]
        (should= 5 (sut/medium board/get-board "O" (board/open-positions board/get-board)))))

    (it "medium can give easy"
      (with-redefs [rand-int (fn [& _] 1)
                    sut/easy (fn [& _] 3)]
        (should= 3 (sut/medium board/get-board "O" (board/open-positions board/get-board)))))
    )

  (context "ai-moves"
    (it "blank board gives 0"
      (should= 0 (sut/ai-turn board/get-board "O" :hard)))

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