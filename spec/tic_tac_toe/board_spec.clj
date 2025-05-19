(ns tic-tac-toe.board_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as sut]
            [tic-tac-toe.printer :as printer]))

(describe "board"

  (context "can print a board"
    (it "displays a 3x3 board"
      (should= "   0 | 1 | 2\n  -----------\n   3 | 4 | 5\n  -----------\n   6 | 7 | 8\n----------------\n"
        (with-out-str (printer/display-board (sut/get-board :3x3)))))
    (it "displays a 4x4 board"
      (should= "   0 | 1 | 2 | 3\n  -----------\n   4 | 5 | 6 | 7\n  -----------\n   8 | 9 | 10 | 11\n  -----------\n   12 | 13 | 14 | 15\n----------------\n"
        (with-out-str (printer/display-board (sut/get-board :4x4))))))

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
      (should-not (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

    (it "someone made winning move"
      (should= "X" (sut/check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should-not (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should= "X" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
      (should= "O" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]])))

    (it "4x4 winning moves"
      (should= "X" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["X"] ["X"] ["X"] ["O"] ["X"] ["O"] ["X"] ["O"] ["O"] ["X"] [""] ["X"]]))
      (should= "O" (sut/check-winner [["X"] ["X"] ["O"] ["O"]["X"] ["X"] ["X"] ["O"]["X"] ["O"] ["X"] ["O"]["O"] ["X"] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
      )
    )
  )