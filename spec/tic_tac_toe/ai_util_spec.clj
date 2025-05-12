(ns tic-tac-toe.ai-util-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-util :as sut]))
(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])
(describe "ai-util"
 (context "win or tie?"
  (it "tie game"
    (should (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["O"] ["X"]]))
    (should-not (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

  (it "someone made winning move"
    (should= "X" (sut/check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should-not (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should= "X" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
    (should= "O" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
    (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
    )
   )

  (context "minimax"
    (it "empty"
      (should= 0 (sut/score-board board false 0 "O")))
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

  )