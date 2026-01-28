(ns tic-tac-toe.human-turn-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 context
                                 should-not=
                                 should-not
                                 should-contain
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=]]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.human-turn :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.cli-text :as printer]))

(describe "human-turn"
  (with-stubs)
  (it "oops bad move"
    (should= "oops bad move, try again\n" (with-out-str (printer/print-bad-move))))

  (it "print player prompt"
    (let [marker "X"]
      (should= (str "Player " marker ", enter your move:\n") (with-out-str (printer/print-player-prompt marker)))))

  (context "cli"
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
      ))

  (context "next position"
    (redefs-around [read-line (fn [] "1")])
    (with-out-str
      (with-in-str "1"
        (it "invokes next position cli"
          (should= 1 (gamec/next-position {:board   (board/get-board :3x3)
                                          :ui      :cli
                                          :players [:human :ai]}
                       ["X" :human] [:hard])))))

    )

  (context "apply human move"

    (it "applies a valid move, no winner"
      (with-redefs [board/check-winner (stub :check-winner {:return false})
                    db/update-current-game! (stub :update!)
                    gamec/next-player (stub :next {:return "p2"})
                    gamec/empty-space? (stub :empty? {:return true})]
        (let [initial-state {:board {0 ["X"] 1 nil}
                             :turn "p1"
                             :markers ["X" "O"]
                             :screen :game}
              idx 1
              new-state (sut/apply-human-move initial-state idx)]
          (should= "p2" (:turn new-state))
          (should= ["X"] (get-in new-state [:board 0]))
          (should= ["X"] (get-in new-state [:board 1])) ; move applied
          (should-not= :game-over (:screen new-state)))))

    (it "applies a valid move and detects a winner"
      (with-redefs [board/check-winner (stub :check-winner {:return true})
                    db/update-current-game! (stub :update!)
                    gamec/next-player (stub :next {:return "p2"})
                    gamec/empty-space? (stub :empty? {:return true})]
        (let [initial-state {:board {0 ["X"] 1 nil}
                             :turn "p1"
                             :markers ["X" "O"]
                             :screen :game}
              idx 1
              new-state (sut/apply-human-move initial-state idx)]
          (should= "p2" (:turn new-state))
          (should= :game-over (:screen new-state)))))

    (it "ignores the move if index is nil"
      (let [initial-state {:board {} :turn "p1" :markers ["X" "O"]}]
        (should= initial-state (sut/apply-human-move initial-state nil))))

    (it "ignores the move if space is not empty"
      (with-redefs [gamec/empty-space? (stub :empty? {:return false})]
        (let [initial-state {:board {0 ["X"]} :turn "p1" :markers ["X" "O"]}]
          (should= initial-state (sut/apply-human-move initial-state 0))))))

  (context "quil gui"
    (it "returns choice"
      (let [out (gamec/next-position {:board   (vec (repeat 9 [""]))
                                     :ui      :gui
                                     :players [:human :ai]
                                     :last-move  0
                                     :markers ["X" "O"]
                                     :turn    "p1"} ["X" :human] nil)]
        (should= 0 out)))

    (it "handles bad input; removes choice"
      (let [out (gamec/next-position {:board   (vec (repeat 9 [""]))
                                     :ui      :gui
                                     :players [:human :ai]
                                     :choice  10
                                     :markers ["X" "O"]
                                     :turn    "p1"} ["X" :human] nil)
            expected-out {:board   (vec (repeat 9 [""]))
                          :ui      :gui
                          :players [:human :ai]
                          :markers ["X" "O"]
                          :turn    "p1"}]
        (should-not out)
        (should-not (:choice expected-out))))
    )
  )