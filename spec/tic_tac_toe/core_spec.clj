(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))

(describe "tic tac toe"
  (with-stubs)

  (context "prints-game"
    (it "displays a board"
      (should=  "   0 | 1 | 2\n  -----------\n   3 | 4 | 5\n  -----------\n   6 | 7 | 8\n----------------\n" (with-out-str (printer/display-board board/get-board))))

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str
          (with-in-str "0\n3\n7"
            (init/init-game board/get-board [:human :ai] ["X" "O"] [:hard])))
        (should-have-invoked :display-board))))

  (context "Game-loop"
    (tags :slow)
    (it "Human-vs-ai"
      (should (clojure.string/includes? (with-out-str (with-in-str "0\n3\n7\n" (init/init-game board/get-board [:human :ai] ["X" "O"] [:hard]))) "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes? (with-out-str (with-in-str "0\n3\n7\n" (init/init-game board/get-board [:ai :human] ["X" "O"] [:hard]))) "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes? (with-out-str (init/init-game board/get-board [:ai :ai] ["X" "O"] [:hard :hard])) "tie")))
    )
  #_(focus-context "play-turns"
    (it "without difficulty gives :human"
      (should= :human (init/play-turn board/get-board "X" (constantly 0)))))
  )


