(ns tic-tac-toe.config-spec
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
            [tic-tac-toe.gamec :as game]
            [tic-tac-toe.config :as sut]
            [tic-tac-toe.ai-turnc :as aic]))

(describe "game setup"
  (with-stubs)
  ;(redefs-around [sut/auto-advance (stub :auto-advance)])
  ;
  (before (reset! sut/state {:screen  :select-game-mode
                             :ui      :web-cljs
                             :store :ratom
                             :turn    "p1"
                             :markers ["X" "O"]}))

  (context "select-difficulty correct count and switch to game"
    (it "single difficulty 1 time"
      (reset! sut/state {:screen  :select-difficulty
                         :ui      :web-cljs
                         :store   :ratom
                         :turn    "p1"
                         :markers ["X" "O"]
                         :players [:human :ai]})
      (let [out (sut/select-difficulty! sut/state :easy)]
        (should= [:easy] (:difficulties out))
        (should= :game (:screen out))))

    (it "two difficulty "
      (reset! sut/state {:screen  :select-difficulty
                         :ui      :web-cljs
                         :store   :ratom
                         :turn    "p1"
                         :markers ["X" "O"]
                         :players [:ai :ai]})
      (let [out1 (sut/select-difficulty! sut/state :easy)
            out2 (sut/select-difficulty! sut/state :hard)]
        (should= [:easy] (:difficulties out1))
        (should= :select-difficulty (:screen out1))

        (should= [:easy :hard] (:difficulties out2))
        (should= :game (:screen out2))
        )))

  (context "auto advance"
    (it "does not advance if it's not the AI's turn"
      (with-redefs [game/next-state (stub :next-state)]
        (let [initial-state {:screen     :game
                             :store   :ratom
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
                     :store   :ratom
                     :ui      :web-cljs
                     :players [:ai :ai]
                     :turn    "p2"
                     :board   (board/get-board :3x3)}]
          (reset! sut/state state)
          (sut/auto-advance :test-key sut/state state state)
          ;(should-have-invoked :sleep)
          #_(should-have-invoked :next-state))))

    (context "game-over?"
      (before
        (reset! sut/state {:screen :game
                           :store   :ratom}))
      (it "resets state with game-over screen when winner? is true"
        (with-redefs [game/next-state (stub :next-state {:return {:board "updated" :something "else"
                                                                  :store   :ratom}})]
          (sut/game-over? true {:dummy :input
                                :store   :ratom})
          (let [state @sut/state]
            (should=  {:dummy :input, :store :ratom, :screen :game-over} state))))

      (it "resets state normally when winner? is false"
        (with-redefs [game/next-state (stub :next-state {:return {:board "next" :something "else"
                                                                  :store :ratom}})]
          (sut/game-over? false {:dummy :input
                                 :store   :ratom})
          (let [state @sut/state]
            (should= {:dummy :input, :store :ratom} state))))

      )

    )

  )




