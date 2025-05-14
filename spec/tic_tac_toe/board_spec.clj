(ns tic-tac-toe.board_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as sut]))

(describe "board"
  (context "open-positions"
    (it "returns all moves for open board"
      (should= (range 9) (sut/open-positions sut/get-board)))

    (it "returns empty for full board"
      (let [full-board (map #(assoc % 0 "X") sut/get-board)]
       (should= () (sut/open-positions full-board))))

    (it "returns only open positions - mixed board"
      (let [temp-board [["X"][""]["X"] ["X"]["O"]["X"] ["X"][""][""]]]
       (should= '(1 7 8) (sut/open-positions temp-board))))
    )

  (context "win or tie?"
    (it "tie game"
      (should (sut/tie-game? [["X"]["X"]["X"] ["X"]["X"]["X"] ["X"]["O"]["X"]]))
      (should-not (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

    (it "someone made winning move"
      (should= "X" (sut/check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should-not (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should= "X" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
      (should= "O" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
      )
    )
  )