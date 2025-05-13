(ns tic-tac-toe.human-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.human-turn :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.printer :as printer]))

(describe "human-turn"
  (with-stubs)
  (it "invoke 'bad-move' for bad input"
    (with-redefs [sut/bad-move (stub :bad-move)]
      (with-out-str (with-in-str "9\n" (sut/human-turn board/get-board "O")))
      (should-have-invoked :bad-move)))

  (it "prints message to retry"
    (with-redefs [printer/print-bad-move (fn [& _] (println "oops"))]
      (should-contain "oops"
        (with-out-str (with-in-str "9\n2" (sut/human-turn board/get-board "O")))))
    )
  (it "prints board to retry"
    (with-redefs [printer/display-board (fn [& _] (println "board"))]
      (should-contain "board"
        (with-out-str (with-in-str "9\n2" (sut/human-turn board/get-board "O")))))
    )
  (it "invokes human-turn again"
    (with-redefs [sut/human-turn (stub :human-turn)]
      (with-out-str (with-in-str "9" (sut/human-turn board/get-board "O")))
      (should-have-invoked :human-turn))
    )
  )