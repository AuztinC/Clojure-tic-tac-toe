(ns tic-tac-toe.game-options-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-options :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.printer :as printer]))

(describe "game-options"
  (with-stubs)


  (context "select-game"
    (redefs-around [init/init-game (stub :init-game {:return :init})])

    (it "prints game options"
      (with-redefs [read-line (fn [] "1")]
        (should-contain "Choose your game"
          (with-out-str (sut/select-game)))))

    (it "game-mode retries for bad input"
      (with-redefs [sut/select-game (stub :select-game {:invoke sut/select-game})]
        (let [out (with-out-str (with-in-str "5\n1\n1\n1" (sut/select-game)))]
          (should-contain "Not a game-mode, retry.\n" out)
          (should-have-invoked :select-game {:times 2}))))

    (it "selects human v ai"
      (with-redefs [board/get-board (stub :get-board)]
        (with-out-str (with-in-str "1\n1\n1" (sut/select-game)))
        (should-have-invoked :init-game {:with [(hash-map :size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:easy])]})))

    (it "selects ai vs human"
      (with-out-str (with-in-str "2\n1\n1" (sut/select-game)))
      (should-have-invoked :init-game {:with [(hash-map :size (board/get-board :3x3) :players [:ai :human] :markers ["X" "O"] :difficulties [:easy])]}))

    (it "selects human v human"
      (with-out-str (with-in-str "3\n0\n1" (sut/select-game)))
      (should-have-invoked :init-game {:with [(hash-map :size (board/get-board :3x3) :players [:human :human] :markers ["X" "O"] :difficulties [])]}))

    (it "selects ai v ai"
      (with-out-str (with-in-str "4\n1\n1\n3" (sut/select-game)))
      (should-have-invoked :init-game {:with [(hash-map :size (board/get-board :3x3) :players [:ai :ai] :markers ["X" "O"] :difficulties [:easy :hard])]}))
    )

  (context "selecting difficulty"
    (it "prints difficulty"
      (should-contain "Choose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard\n"
        (with-out-str (with-in-str "1\n" (sut/select-difficulty 1)))))

    (it "difficulty retries for bad input"
      (with-redefs [sut/select-difficulty (stub :select-difficulty {:invoke sut/select-difficulty})]
        (let [out1 (with-out-str (with-in-str "5\n1\n1" (sut/select-difficulty 1)))
              out2 (with-out-str (with-in-str "5\n1\n6\n2" (sut/select-difficulty 2)))]
          (should-contain "Not a difficulty, retry.\n" out1)
          (should-contain "Not a difficulty, retry.\n" out2))))

    (it "selects one difficulty for human vs ai"
      (with-out-str (should= [:easy] (with-in-str "1" (sut/select-difficulty 1)))))
    (it "selects two difficulty for ai vs ai"
      (with-out-str (should= [:easy :hard] (with-in-str "1\n3" (sut/select-difficulty 2)))))
    (it "empty for human vs human"
      (with-out-str (should= [] (with-in-str "1" (sut/select-difficulty 0)))))
    )
  (context "select board size"
    (it "prints board options"
      (should= "Choose your board\n  1: 3x3\n  2: 4x4\n  3: 3x3x3\n" (with-out-str (printer/print-board-selection))))
    (it "can select both sizes"
      (with-out-str (should= :3x3 (with-in-str "1" (sut/select-board))))
      (with-out-str (should= :4x4 (with-in-str "2" (sut/select-board)))))
    (it "retry for bad input"
      (with-redefs [sut/select-board (stub :select-board {:invoke sut/select-board})]
        (let [out (with-out-str (with-in-str "5\n1" (sut/select-board)))]
          (should-contain "Oops, try again." out)
          (should-have-invoked :select-board {:times 2})))))
  )