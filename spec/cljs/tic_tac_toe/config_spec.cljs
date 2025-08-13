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
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.config :as sut]
            [tic-tac-toe.ai-turnc :as aic]))


(def human-v-ai
  {:screen     :game
   :store      :ratom
   :ui         :web-cljs
   :players    [:human :ai]
   :turn       "p1"
   :board      (board/get-board :3x3)
   :board-size :3x3
   :markers ["X" "O"]})

(describe "game setup"
  (with-stubs)
  ;(redefs-around [sut/auto-advance (stub :auto-advance)])

  (before (reset! sut/state {:screen  :select-game-mode
                             :ui      :web-cljs
                             :store   :ratom
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

  (context "handle-click"
    (it "returns initial state if bad input"
      (with-redefs [sut/ignore-user-input? (stub :ignore-user-input {:return false})
                    gamec/empty-space? (stub :empty-space {:return false})]
        (reset! sut/state human-v-ai)
        (let [state human-v-ai
              out (sut/handle-click 0)]
          (should= state out))))

    (it "swaps atom for good input"
      (with-redefs [sut/ignore-user-input? (stub :ignore-user-input {:return false})
                    gamec/empty-space? (stub :empty-space {:return true})
                    gamec/next-position (stub :next-position {:return 0})]
        (reset! sut/state human-v-ai)
        (let [new-state {:screen     :game
                         :store      :ratom
                         :ui         :web-cljs
                         :players    [:human :ai]
                         :turn       "p2"
                         :board      [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                         :board-size :3x3
                         :markers ["X" "O"]}
              out (sut/handle-click 0)]

          (should= new-state out))))
    )

  (context "auto advance"
    (it "does not advance if it's not the AI's turn"
      (with-redefs [gamec/next-state (stub :next-state)]
        (let [initial-state {:screen     :game
                             :store      :ratom
                             :ui         :web-cljs
                             :players    [:human :ai]
                             :turn       "p1"
                             :board      (board/get-board :3x3)
                             :board-size :3x3}]
          (reset! sut/state initial-state)
          (sut/auto-advance :test-key sut/state initial-state initial-state)
          (should= initial-state @sut/state)
          (should-not-have-invoked :next-state))))

    (it "advances immediately when next player is AI but players are human vs AI"
      (with-redefs [board/check-winner (constantly false)
                    gamec/next-position (constantly 3)
                    gamec/next-state (stub :next-state {:return {:screen :game :turn "p1"}})
                    sut/sleep (stub :sleep)]
        (let [state {:screen :game :players [:human :ai] :turn "p2" :board (board/get-board :3x3)}]
          (reset! sut/state state)
          (sut/auto-advance :test-key sut/state state state)
          (should-not-have-invoked :sleep)
          (should-have-invoked :next-state {:with [state 3]})
          (should= {:screen :game :turn "p1"} @sut/state))))



    (it "performs move when ai v ai (sleep branch)"
      (with-redefs [board/check-winner (stub :check-winner {:return false})
                    gamec/next-position (stub :next-position {:return 4})
                    gamec/next-state (stub :next-state {:return {:screen :game :turn "p1"}})
                    sut/sleep (fn [f ms] (f))]
        (let [state {:screen  :game
                     :store   :ratom
                     :ui      :web-cljs
                     :players [:ai :ai]
                     :turn    "p2"
                     :board   (board/get-board :3x3)}]
          (reset! sut/state state)
          (sut/auto-advance :test-key sut/state state state)
          (should-have-invoked :next-state {:with [state 4]})
          (should= {:screen :game :turn "p1"} @sut/state))))

    (context "game-over!"

      (it "goes to :game-over immediately when board has winner"
        (with-redefs [board/check-winner (constantly true)
                      gamec/next-player-key (stub :next-player-key)
                      gamec/next-position (stub :next-position)
                      gamec/next-state (stub :next-state)
                      sut/sleep (stub :sleep)]
          (let [state {:screen  :game
                       :players [:ai :ai]
                       :board   (board/get-board :3x3)}]
            (reset! sut/state state)
            (sut/auto-advance :test-key sut/state state state)
            (should= :game-over (:screen @sut/state))
            (should-not-have-invoked :sleep)
            (should-not-have-invoked :next-state)
            (should-not-have-invoked :next-position))))

      )

    )

  )




