(ns tic-tac-toe.human-turn-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 should
                                 before
                                 context
                                 should-contain
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=]]
            [tic-tac-toe.human-turn :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.printer :as printer]))

(describe "human-turn"
  (with-stubs)
  (it "oops bad move"
    (should= "oops bad move, try again\n" (with-out-str (printer/print-bad-move))))

  (it "print player prompt"
    (let [marker "X"]
      (should= (str "Player " marker ", enter your move:\n") (with-out-str (printer/print-player-prompt marker)))))

  (it "invoke 'bad-move' for bad input"
    (with-redefs [sut/bad-move (stub :bad-move)]
      (with-out-str (with-in-str "f\n" (sut/human-turn (board/get-board :3x3) "O")))
      (with-out-str (with-in-str "9\n" (sut/human-turn (board/get-board :3x3) "O")))
      (should-have-invoked :bad-move)))

  (it "prints message to retry"
    (with-redefs [printer/print-bad-move (fn [& _] (println "oops"))]
      (should-contain "oops"
        (with-out-str (with-in-str "9\n2" (sut/human-turn (board/get-board :3x3) "O")))))
    )
  (it "prints board to retry"
    (with-redefs [printer/display-board (fn [& _] (println "board"))]
      (should-contain "board"
        (with-out-str (with-in-str "9\n2" (sut/human-turn (board/get-board :3x3) "O")))))
    )
  (it "invokes human-turn again"
    (with-redefs [sut/human-turn (stub :human-turn)]
      (with-out-str (with-in-str "9" (sut/human-turn (board/get-board :3x3) "O")))
      (should-have-invoked :human-turn))
    )

  (context "next position"
    (redefs-around [read-line (fn [] "1")])
    (with-out-str
      (with-in-str "1"
       (it "invokes next position cli"
        (should= 1 (game/next-position {:board (board/get-board :3x3) :ui :cli :players [:human :ai]} ["X" :human] [:hard]))))))
  )