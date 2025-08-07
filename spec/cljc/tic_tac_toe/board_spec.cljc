(ns tic-tac-toe.board-spec
  (:require [speclj.core :refer [describe
                                 should
                                 context
                                 it
                                 should-not
                                 should=]]
            [tic-tac-toe.board :as sut]))

(describe "board"

  (context "open-positions"
    (it "returns all moves for 3x3"
      (should= (range 9) (sut/open-positions (sut/get-board :3x3))))
    (it "returns all moves for 4x4"
      (should= (range 16) (sut/open-positions (sut/get-board :4x4))))

    (it "returns empty for full board"
      (let [full-board (map #(assoc % 0 "X") (sut/get-board :3x3))]
        (should= () (sut/open-positions full-board))))

    (it "returns only open positions - mixed board"
      (let [temp-board [["X"] [""] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""]]]
        (should= '(1 7 8) (sut/open-positions temp-board))))
    )

  (context "win or tie?"
    (it "tie game"
      (should (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["O"] ["X"]]))
      (should-not (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]]))
      (should-not (sut/tie-game? [[""] [""] [""] [""] [""] [""] [""] [""] [""]])))

    (it "someone made winning move"
      (should= "X" (sut/check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should-not (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should= "X" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
      (should= "O" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]])))

    (it "4x4 winning moves"
      (should= "X" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["X"] ["X"] ["X"] ["O"] ["X"] ["O"] ["X"] ["O"] ["O"] ["X"] [""] ["X"]]))
      (should= "O" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["X"] ["X"] ["X"] ["O"] ["X"] ["O"] ["X"] ["O"] ["O"] ["X"] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]])))
    (it "3x3x3 flat winning moves"
      (should= "X" (sut/check-winner [["X"] ["X"] ["X"] [""] [""] [""] [""] [""] [""]
                                      [""] [""] [""] [""] [""] [""] [""] [""] [""]
                                      [""] [""] [""] [""] [""] [""] [""] [""] [""]]))
      (should= "X" (sut/check-winner [[""] [""] [""] [""] [""] [""] [""] [""] [""]
                                      [""] [""] [""] ["X"] ["X"] ["X"] [""] [""] [""]
                                      [""] [""] [""] [""] [""] [""] [""] [""] [""]])))
    (it "3x3x3 vertical moves"
      (should= "X" (sut/check-winner [[""] [""] [""]  [""] [""] [""]  [""] [""] [""]
                                      ["X"] [""] [""]  [""] ["X"] [""]  [""] [""] ["X"]
                                      [""] [""] [""]  [""] [""] [""]  [""] [""] [""]])))
    (it "3x3x3 tie"
      (should= "X" (sut/check-winner [["X"] ["O"] ["O"] ["X"] ["X"] [""] [""] [""] [""]
                                      ["X"] ["X"] [""] [""] ["X"] ["X"] ["O"] [""] ["X"]
                                      [""] [""] ["O"] [""] [""] [""] [""] [""] [""]])))
    )
  (it "count 49 3x3x3 winning moves"
    (should= 49 (count (get sut/winning-moves :3x3x3))))
  )