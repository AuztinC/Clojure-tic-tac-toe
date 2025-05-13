(ns tic-tac-toe.game-options-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-options :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.init-game :as init]))

(describe "game-options"
  (with-stubs)
 (context "select-game"
  (redefs-around [init/init-game (stub :init-game {:return :init})])

  (it "prints game options"
    (with-redefs [read-line (fn [] "1")]
      (should= "Choose your game\n  1: Human vs Computer\n  2: Computer vs Human\n  3: Human vs Human\n  4: Computer vs Computer\nChoose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard\n"
        (with-out-str (sut/select-game)))))

  (it "game-mode retries for bad input"
    (with-redefs [sut/select-game (stub :select-game {:invoke sut/select-game})]
      (let [out (with-out-str (with-in-str "5\n1\n1" (sut/select-game)))]
        (should-contain "Not a game-mode, retry.\n" out)
        (should-have-invoked :select-game {:times 2}))))

  (it "selects human v ai"
    (with-out-str (with-in-str "1\n1" (sut/select-game)))
    (should-have-invoked :init-game {:with [board/get-board [:human :ai] ["X" "O"] [:easy]]}))

  (it "selects ai vs human"
    (with-out-str (with-in-str "2\n1" (sut/select-game)))
    (should-have-invoked :init-game {:with [board/get-board [:ai :human] ["X" "O"] [:easy]]}))

  (it "selects human v human"
    (with-out-str (with-in-str "3\n" (sut/select-game)))
    (should-have-invoked :init-game {:with [board/get-board [:human :human] ["X" "O"] []]}))

  (it "selects ai v ai"
    (with-out-str (with-in-str "4\n1\n3" (sut/select-game)))
    (should-have-invoked :init-game {:with [board/get-board [:ai :ai] ["X" "O"] [:easy :hard]]}))
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
  ))