(ns tic-tac-toe.init-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as sut]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))

(describe "tic tac toe"
  (with-stubs)

  #_(context "init and resume call game-loop"
      (with-redefs [sut/game-loop (stub :game-loop)]
        (it "init"
          (with-out-str (with-in-str "1\n7\n3" (sut/init-game {:size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard]})))
          (should-have-invoked :game-loop))))

  (context "prints-game"

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str
          (with-in-str "0\n3\n7"
            (sut/init-game {:size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard]})))
        (should-have-invoked :display-board))))

  (context "Game-loop"
    (tags :slow)
    (it "Human-vs-ai"
      (should (clojure.string/includes? (with-out-str (with-in-str "0\n3\n7\n" (sut/init-game {:size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard]}))) "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes? (with-out-str (with-in-str "0\n3\n7\n" (sut/init-game {:size (board/get-board :3x3) :players [:ai :human] :markers ["X" "O"] :difficulties [:hard]}))) "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes? (with-out-str (sut/init-game {:size (board/get-board :3x3) :players [:ai :ai] :markers ["X" "O"] :difficulties [:hard :hard]})) "tie")))
    )
  )


