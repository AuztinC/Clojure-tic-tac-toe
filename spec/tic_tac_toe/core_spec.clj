(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :as sut]))

(describe "tic tac toe"
  (with-stubs)

  #_(context "updated game loop using init-game"
      (it "Human-vs-ai"
        (should (clojure.string/includes? (with-out-str (with-in-str "0\n3\n7\n" (sut/init-game sut/board [:human :ai] ["X" "O"]))) "O wins!\n")))
      (it "ai-vs-ai"
        (should (clojure.string/includes? (with-out-str (sut/init-game sut/board [:ai :ai] ["X" "O"])) "tie")))
      )

  (context "select-game"
    (redefs-around [sut/init-game (stub :init-game {:return :init})])

    (it "prints game options"
      (with-redefs [read-line (fn [] "1")]
        (should= "Choose your game\n1: Human vs Computer\n2: Computer vs Human\n3: Human vs Human
  4: Computer vs Computer\nChoose AI difficulties
  1: Easy\n2: Medium\n3: Hard\n" (with-out-str (sut/select-game)))))

    (it "game-mode retries for bad input"
      (with-redefs [sut/select-game (stub :select-game {:invoke sut/select-game})]
        (let [out (with-out-str (with-in-str "5\n1\n1" (sut/select-game)))]
          (should-contain "Not a game-mode, retry.\n" out)
          (should-have-invoked :select-game {:times 2}))))

    (it "selects human v ai"
      (with-out-str (with-in-str "1\n1" (sut/select-game)))
      (should-have-invoked :init-game {:with [sut/board [:human :ai] ["X" "O"] [:easy]]}))

    (it "selects ai vs human"
      (with-out-str (with-in-str "2\n1" (sut/select-game)))
      (should-have-invoked :init-game {:with [sut/board [:ai :human] ["X" "O"] [:easy]]}))

    (it "selects human v human"
      (with-out-str (with-in-str "3\n" (sut/select-game)))
      (should-have-invoked :init-game {:with [sut/board [:human :human] ["X" "O"] []]}))

    (it "selects ai v ai"
      (with-out-str (with-in-str "4\n1\n3" (sut/select-game)))
      (should-have-invoked :init-game {:with [sut/board [:ai :ai] ["X" "O"] [:easy :hard]]}))
    )

  (focus-context "difficulty functions"
    (it "hard runs minimax, returns best position"
      (let [temp-board [["X"] ["X"] [""] [""] ["O"] [""] [""] [""] [""]]]
        (should= 2 (sut/hard temp-board "O" (sut/open-positions temp-board)))))
    (it "easy returns random open position"
      (with-redefs [rand-nth (constantly 1)]
        (should= 1 (sut/easy (sut/open-positions sut/board)))))
    (it "medium can give hard"
    (with-redefs [rand-int (fn [& _] 0)
                  sut/hard (fn [& _] 5)]
     (should= 5 (sut/medium sut/board "O" (sut/open-positions sut/board)))))
    (it "medium can give easy"
      (with-redefs [rand-int (fn [& _] 1)
                    sut/easy (fn [& _] 3)]
        (should= 3 (sut/medium sut/board "O" (sut/open-positions sut/board)))))
    )

  (context "selecting difficulty"
    (it "prints difficulty"
      (should= "Choose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard\n"
        (with-out-str (with-in-str "1\n" (sut/select-difficulty 1)))))

    (it "difficulty retries for bad input"
      (with-redefs [sut/select-difficulty (stub :select-difficulty {:invoke sut/select-difficulty})]
        (let [out (with-out-str (with-in-str "5\n1" (sut/select-difficulty 1)))]
          (should-contain "Not a difficulty, retry.\n" out)
          (should-have-invoked :select-difficulty {:times 2}))))

    (it "selects one difficulty for human vs ai"
      (with-out-str (should= [:easy] (with-in-str "1" (sut/select-difficulty 1)))))
    (it "selects two difficulty for ai vs ai"
      (with-out-str (should= [:easy :hard] (with-in-str "1\n3" (sut/select-difficulty 2)))))
    (it "empty for human vs human"
      (with-out-str (should= [] (with-in-str "1" (sut/select-difficulty 0)))))
    )

  (context "invoking difficulties"
    (it "can invoke hard"
      (with-redefs [sut/hard (stub :hard {:invoke sut/hard})]
        (sut/ai-turn sut/board "O" :hard)
        (should-have-invoked :hard)))
    (it "can invoke medium"
      (with-redefs [sut/medium (stub :medium {:invoke sut/medium})]
        (sut/ai-turn sut/board "O" :medium)
        (should-have-invoked :medium)))
    (it "can invoke medium"
      (with-redefs [sut/easy (stub :easy {:invoke sut/easy})]
        (sut/ai-turn sut/board "O" :easy)
        (should-have-invoked :easy))))

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
      ))

  (context "minimax"
    (it "empty"
      (should= 0 (sut/score-board sut/board false 0 "O")))
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

  (context "ai-moves"
    (it "blank board gives 0"
      (should= 0 (sut/ai-turn sut/board "O" :hard)))
    (it "plays center asap"
      (should= 4 (sut/ai-turn (sut/play-turn sut/board "X" (constantly 0)) "O" :hard)))
    (it "defends against player win"
      (should= 2 (sut/ai-turn [["X"] ["X"] [""]
                               [""] ["O"] [""]
                               [""] [""] [""]] "O" :hard))
      (should= 6 (sut/ai-turn [["X"] [""] [""]
                               ["X"] ["O"] [""]
                               [""] [""] [""]] "O" :hard))
      (should= 5 (sut/ai-turn [["O"] [""] [""]
                               ["X"] ["X"] [""]
                               [""] [""] [""]] "O" :hard))))

  #_(it "simulate starts"
      (should-not= "X" (sut/simulate-game [[""] [""] [""] [""] [""] [""] [""] [""] [""]] "player"))
      (should-not (sut/simulate-all-first-moves))
      )

  (it "makes a move"
    (should= ["X" nil nil
              nil nil nil
              nil nil nil]
      (sut/make-move (vec (repeat 9 nil)) 0))
    (should= [nil "X" nil
              nil nil nil
              nil nil nil]
      (sut/make-move (vec (repeat 9 nil)) 1)))

  )


