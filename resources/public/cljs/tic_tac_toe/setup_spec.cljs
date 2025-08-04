(ns tic-tac-toe.setup-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        before
                                        redefs-around
                                        with-stubs
                                        stub
                                        should-have-invoked
                                        context
                                        should-contain
                                        focus-context
                                        should-not-have-invoked
                                        focus-it]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.setup :as sut]))

(describe "game setup"
  (with-stubs)
  ;(redefs-around [sut/auto-advance (stub :auto-advance)])
  ;
  (before (reset! sut/state {:screen :select-game-mode
                             :ui :web-cljs
                             :turn "p1"
                             :markers ["X" "O"]}))

  (context "select-difficulty correct count and switch to game"
    (it "single difficulty 1 time"
      (reset! sut/state {:screen  :select-game-mode
                         :ui      :web-cljs
                         :turn    "p1"
                         :markers ["X" "O"]
                         :players [:human :ai]})
      (let [out (sut/select-difficulty! :easy)]
        (should= [:easy] (:difficulties out))
        (should= :game (:screen out))))

    (it "two difficulty "
      (reset! sut/state {:screen  :select-game-mode
                         :ui      :web-cljs
                         :turn    "p1"
                         :markers ["X" "O"]
                         :players [:ai :ai]})
      (let [out1 (sut/select-difficulty! :easy)
            out2 (sut/select-difficulty! :hard)]
        (should= [:easy] (:difficulties out1))
        (should= :select-difficulty (:screen out1))

        (should= [:easy :hard] (:difficulties out2))
        (should= :game (:screen out2))
        )))

  (context "auto advance"
    (it "does not advance if it's not the AI's turn"
      (with-redefs [game/next-state (stub :next-state)]
        (let [initial-state {:screen     :game
                             :ui         :web-cljs
                             :players    [:human :ai]
                             :turn       "p1"
                             :board      (board/get-board :3x3)
                             :board-size :3x3}]
          (reset! sut/state initial-state)
          (sut/auto-advance :test-key sut/state initial-state initial-state)
          (should= initial-state @sut/state)
          (should-not-have-invoked :next-state))))


    (it "returns new state if ai turn"
      (with-redefs [game/next-state (stub :next-state {:return {:turn "p1"}})
                    sut/sleep (stub :sleep)]
        (let [state {:screen  :game
                     :ui      :web-cljs
                     :players [:human :ai]
                     :turn    "p2"
                     :board   (board/get-board :3x3)}]
          (reset! sut/state state)
          (sut/auto-advance :test-key sut/state state state)
          (should-have-invoked :sleep)
          #_(should-have-invoked :next-state))))
    )

  )




