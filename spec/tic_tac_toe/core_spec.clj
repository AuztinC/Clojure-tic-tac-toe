(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic tac toe"
  (with-stubs)

  ;(redefs-around [read-line (stub :read-line {:return "X"})])

  (context "ui and game loop"
    (redefs-around [read-line (constantly "8")])

    (it "prints board"
      (should= "([] [] [])\n([] [] [])\n([] [] [])\n" (with-out-str (human-vs-computer board))))
    (it "read user input"
      (with-out-str
        (should= ["X"] (nth (human-vs-computer board) 8))))
    (it "let ai respond"
      (with-out-str
        (should= ["O"] (nth (human-vs-computer board) 4))))
    (it "check's player choice"
      (with-redefs [read-line (fn [] "8")]
        (should= 8 (check-position [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""]] "X"))))
    )

  (it "bad input"
      (with-out-str
        (should= 0 (with-in-str "-1\n0"(check-position board "X")))))

  (context "won or tie?"
   (it "tie game"
    (should (tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["O"] ["X"]]))
    (should-not (tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

  (it "someone made winning move"
    (should= "X" (check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should-not (check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should= "X" (check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
    (should= "O" (check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
    (should= "tie" (check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
    ))

  (context "minimax"
    (it "tie game"
      (should= 0 (score-board [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["X"] ["X"] ["O"]] false 0))
      (should= 0 (score-board [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"] ["O"]] false 0))
      (should= 0 (score-board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] true 0))
      )
    (it "Player will win"
      (should= -15 (score-board [["X"] ["X"] [""] [""] [""] [""] [""] [""] [""]] false 0))
      (should= -15 (score-board [["X"] [""] [""] ["X"] [""] [""] [""] [""] [""]] false 0))
      (should= -15 (score-board [["X"] [""] [""] ["X"] [""] ["O"] [""] [""] [""]] false 0))
      )
    (it "player has fork to win"
      (should= -13 (score-board [["X"] ["X"] [""] ["X"] ["O"] ["O"] [""] [""] [""]] false 0))
      (should= 9 (score-board [[""] ["O"] [""] ["X"] [""] ["X"] ["X"] ["O"] ["O"]] true 0))
      )
    (it "ai will win"
      (should= 6 (score-board [[""] [""] [""] [""] [""] [""] ["O"] ["O"] [""]] false 0))
      )
    (it "ai has fork to win"
      (should= 8 (score-board [["O"] ["X"] [""] ["O"] ["O"] [""] ["X"] [""] [""]] false 0))
      (should= 8 (score-board [["O"] ["O"] [""] ["O"] [""] ["X"] ["X"] ["O"] ["O"]] false 0))
      )
    )

  (it "ai turn : return index for chosen position"
    (should= 6
      (ai-turn [["X"] ["O"] [""]
                ["X"] [""] [""]
                [""] [""] [""]] "O")))

  (it "give winning move over block"
    (should= 6 (winner->block
                 [["X"] ["O"] [""]
                  [""] ["X"] ["X"]
                  [""] ["O"] ["O"]]))
    (should= 4 (winner->block
                 [["X"] ["O"] ["X"]
                  [""] [""] ["X"]
                  [""] ["O"] [""]]))
    )

  #_(it "init"
    (should= -1 (init-game human-vs-computer)))

  #_(it "simulate starts"
    (should-not= "X" (simulate-game [[""] [""] [""] [""] [""] [""] [""] [""] [""]] "player"))
    (should-not (simulate-all-first-moves))
    )
  #_(it "human vs computer"
      (should= -1 (computer-vs-human)))
  #_(it "computer vs human"
      (should= "tie" (computer-vs-human)))
  #_(it "computer vs computer"
    (should= "tie" (comp-vs-comp [[""] [""] [""] [""] [""] [""] [""] [""] [""]] "X"))
    (should= "tie" (comp-vs-comp [[""] [""] [""] [""] [""] [""] [""] [""] [""]] "O")))
  #_(it "human vs human"
      (should= -1 (human-vs-human)))
  ;(redefs-around [read-line (stub :read-line {:return "X"})])
  )


