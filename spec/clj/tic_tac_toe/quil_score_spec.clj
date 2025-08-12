(ns tic-tac-toe.quil-score_spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 should
                                 before
                                 context
                                 focus-describe
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=
                                 should-not
                                 should-not-have-invoked]]
            [speclj.stub :as stub]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.quil-core :as sut]
            [quil.core :as q]
            [tic-tac-toe.quil-drawings :as draw]))

(def ai-vs-ai-state {:id           123
                     :ui :gui
                     :screen       :game
                     :board-size   :3x3
                     :board        (board/get-board :3x3)
                     :markers      ["X" "O"]
                     :difficulties [:easy :easy]
                     :store        :mem
                     :typed-id     ""
                     :turn         "p1"
                     :players      [:ai :ai]})

(def ai-vs-human-state {:id           123
                        :screen       :game
                        :board-size   :3x3
                        :board        (board/get-board :3x3)
                        :markers      ["X" "O"]
                        :difficulties [:easy]
                        :store        :mem
                        :typed-id     ""
                        :turn         "p1"
                        :players      [:ai :human]})

(def human-vs-ai-state {:id         123
                        :screen     :game
                        :board-size :3x3
                        :board      (board/get-board :3x3)
                        :markers    ["X" "O"]
                        :store      :mem
                        :typed-id   ""
                        :turn       "p1"
                        :players    [:human :ai]})

(describe "quil"
  (with-stubs)
  (redefs-around [q/fill (stub :fill)
                  q/rect (stub :rect)
                  q/text (stub :text)
                  q/frame-rate (stub :frame-rate)])

  (it "draw-button"
    (draw/draw-button "text" 10 10 10 10)
    (should-have-invoked :fill {:with [0]})
    (should-have-invoked :text {:with ["text" 15 15]}))

  (it "clicks in a button"
    (let [bx 20
          by 20
          w 20
          h 20]
      (should (sut/in-button? 20 30 bx by w h))
      (should (sut/in-button? 30 30 bx by w h))
      (should-not (sut/in-button? 20 50 bx by w h))
      (should-not (sut/in-button? 10 20 bx by w h))))

  (it "difficulty"
    (should= :easy (sut/->difficulty 300 230))
    (should= :medium (sut/->difficulty 180 221))
    (should= :hard (sut/->difficulty 100 230))
    (should= nil (sut/->difficulty 10 50)))

  (context "state changes"

    (it "update-state calls game loop if no winner"
      (with-redefs [db/update-current-game! (stub :update-current-game!)
                    gamec/next-state (stub :next-state)]
        (sut/update-state ai-vs-ai-state)
        (should-have-invoked :next-state)))

    (it "update-state returns state not in game"
      (let [state (assoc ai-vs-ai-state :screen :select-game-mode)]
        (should= state (sut/update-state state))
        (should-not-have-invoked :update-state)))
    )

  (context "mouse pressed"

    (it "selects human vs human"
      (let [event {:x 25 :y 225}
            state {:screen :select-game-mode}
            result (sut/mouse-pressed! state event)]
        (should= [:human :human] (:players result))
        (should= :select-board (:screen result))))

    (it "selects ai vs human"
      (let [event {:x 125 :y 225}
            state {:screen :select-game-mode}
            result (sut/mouse-pressed! state event)]
        (should= [:ai :human] (:players result))
        (should= :select-board (:screen result))))

    (it "selects human vs ai"
      (let [event {:x 225 :y 225}
            state {:screen :select-game-mode}
            result (sut/mouse-pressed! state event)]
        (should= [:human :ai] (:players result))
        (should= :select-board (:screen result))))

    (it "selects ai vs ai"
      (let [event {:x 325 :y 225}
            state {:screen :select-game-mode}
            result (sut/mouse-pressed! state event)]
        (should= [:ai :ai] (:players result))
        (should= :select-board (:screen result))))

    (it "selects board :3x3"
      (let [event {:x 255 :y 225}
            state {:screen :select-board}
            result (sut/mouse-pressed! state event)]
        (should= :3x3 (:board-size result))
        (should= :select-difficulty (:screen result))))

    (it "selects board :4x4"
      (let [event {:x 155 :y 225}
            state {:screen :select-board}
            result (sut/mouse-pressed! state event)]
        (should= :4x4 (:board-size result))
        (should= :select-difficulty (:screen result))))

    (it "selects board :3x3x3"
      (let [event {:x 55 :y 225}
            state {:screen :select-board}
            result (sut/mouse-pressed! state event)]
        (should= :3x3x3 (:board-size result))
        (should= :select-difficulty (:screen result))))

    (it "->difficulty returns a difficulty keyword"
      (let [x 55
            y 255]
        (should= :hard (sut/->difficulty x y)))
      (let [x 155
            y 255]
        (should= :medium (sut/->difficulty x y)))
      (let [x 255
            y 255]
        (should= :easy (sut/->difficulty x y))))

    (it "selects single difficulty"
      (with-redefs [db/clear-active (stub :clear-active)
                    db/set-new-game-id (stub :set-new-game-id)]
        (let [event {:x 55 :y 225}
              state {:ui :gui
                     :screen  :select-difficulty
                     :players [:human :ai]}
              result (sut/mouse-pressed! state event)]
          (should= :hard (first (:difficulties result))))))

    (it "selects two difficulties ai vs ai"
      (with-redefs [db/clear-active (stub :clear-active)
                    db/set-new-game-id (stub :set-new-game-id)]
        (let [event {:x 55 :y 225}
              state {:ui :gui
                     :screen     :select-difficulty
                     :board-size :3x3
                     :players    [:ai :ai]}
              result1 (sut/mouse-pressed! state event)
              result2 (sut/mouse-pressed! result1 event)]
          (should= [:hard :hard] (:difficulties result2)))))

    (it "replay can move to select-game-mode"
      (let [event {:x 225 :y 225}
            state {:screen     :replay-confirm
                   :board-size :3x3}
            result (sut/mouse-pressed! state event)]
        (should= :select-game-mode (:screen result))))

    (it "replay can move to replay-id-entry"
      (let [event {:x 125 :y 225}
            state {:screen     :replay-confirm
                   :board-size :3x3}
            result (sut/mouse-pressed! state event)]
        (should= :replay-id-entry (:screen result))))

    (it "clears typed-id"
      (let [event {:x 85 :y 305}
            state {:screen   :replay-id-entry
                   :typed-id "123"}
            result (sut/mouse-pressed! state event)]
        (should= "" (:typed-id result))))

    (it "id entry adds game not found for bad entry"
      (with-redefs [db/find-game-by-id (stub :find-game-by-id)]
        (let [event {:x 225 :y 305}
              state {:screen   :replay-id-entry
                     :typed-id "1"}
              result (sut/mouse-pressed! state event)]
          (should= "Game not found" (:typed-id result))
          (should-have-invoked :find-game-by-id {:with [{:store nil} 1]}))))

    (it "id entry updated typed-id on state"
      (with-redefs [draw/digit-positions {1 [175 255]}
                    db/find-game-by-id (stub :find-game-by-id)]
        (let [event {:x 175 :y 255}
              state {:screen   :replay-id-entry
                     :typed-id ""}
              result (sut/mouse-pressed! state event)]
          (should= "1" (:typed-id result)))))

    (it "moves to replay for good id input"
      (with-redefs [draw/digit-positions {1 [175 255]}
                    db/find-game-by-id (stub :find-game-by-id {:return {:id 1}})]
        (let [event {:x 225 :y 305}
              state {:screen   :replay-id-entry
                     :typed-id "1"}
              result (sut/mouse-pressed! state event)]
          (should= :replay (:screen result)))))

    (it "in-progress merges state"
      (with-redefs [db/in-progress? (stub :in-progress? {:return human-vs-ai-state})]
        (let [event {:x 105 :y 225}
              state {:screen :in-progress-game}
              result (sut/mouse-pressed! state event)]
          (should= human-vs-ai-state result))))

    (it "in progress moves to replay if previous games detected"
      (with-redefs [db/in-progress? (stub :in-progress?)
                    db/previous-games? (stub :previous-games? {:return human-vs-ai-state})]
        (let [event {:x 235 :y 225}
              state {:screen :in-progress-game}
              result (sut/mouse-pressed! state event)]
          (should= :replay-confirm (:screen result)))))

    (it "in progress moves to select-game-mode if NO previous games detected"
      (with-redefs [db/in-progress? (stub :in-progress?)
                    db/previous-games? (stub :previous-games? {:return nil})]
        (let [event {:x 235 :y 225}
              state {:screen :in-progress-game}
              result (sut/mouse-pressed! state event)]
          (should= :select-game-mode (:screen result)))))

    )

  (context "human input"

    (redefs-around [q/width (stub :q/width {:return 400})
                    db/update-current-game! (stub :update-current-game!)
                    sut/setup-2d-game (stub :setup-2d-game)])

    (it "click returns new selection and updates db "
      (let [event {:x 10 :y 10}]
        (sut/handle-in-game-click! human-vs-ai-state event)
        (should-have-invoked :update-current-game! {:with [{:screen     :game,
                                                            :store      :mem,
                                                            :board-size :3x3,
                                                            :turn       "p2",
                                                            :markers    ["X" "O"],
                                                            :id         123,
                                                            :players    [:human :ai],
                                                            :board      [["X"] [""] [""] [""] [""] [""] [""] [""] [""]],
                                                            :typed-id   ""} 0]})
        (should-have-invoked :setup-2d-game)))

    (it "click on taken space returns same state"
      (let [event {:x 10 :y 10}
            new-state (assoc human-vs-ai-state :board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]])]
        (should= new-state (sut/handle-in-game-click! new-state event))))

    (it "checks winner for human vs human"
      (with-redefs [board/check-winner (stub :check-winner {:return "X Wins!"})]
        (let [result (sut/update-state {:screen :game :players [:human :human] :turn "p1"})]
          (should-have-invoked :check-winner)
          (should= :game-over (:screen result)))))

    )

  (context "replay"
    (it "switches frame rate to slow down game"
      (let [state {:screen :replay
                   :board  (board/get-board :3x3)
                   :moves  [{:player "X" :position 0}]}
            result (sut/watch-replay state)]
        (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board result))
        (should-have-invoked :frame-rate {:with [2]}))))

  (context "find-game-size"
    (redefs-around [sut/setup-2d-game (stub :setup-2d-game)
                    sut/setup-3d-game (stub :setup-3d-game)])
    (it "sets up 2d for game :3x3"
      (sut/find-game-size {:board-size :3x3})
      (should-have-invoked :setup-2d-game)
      (should-not-have-invoked :setup-3d-game))

    (it "sets up 2d for game :4x4"
      (sut/find-game-size {:board-size :4x4})
      (should-have-invoked :setup-2d-game)
      (should-not-have-invoked :setup-3d-game))

    (it "sets up 3d for game :3x3x"
      (sut/find-game-size {:board-size :3x3x3})
      (should-not-have-invoked :setup-2d-game)
      (should-have-invoked :setup-3d-game))
    )

  (context "start gui"
    (redefs-around [q/sketch (stub :sketch)])

    (it "quil parameters"
      (sut/start-gui :mem)
      (let [{:keys [title size update draw mouse-pressed middleware]} (apply hash-map (stub/last-invocation-of :sketch))]
        (should= "Tic-Tac-Toe" title)
        (should= [400 400] size)
        (should= sut/draw draw)
        (should= sut/update-state update)
        (should= sut/mouse-pressed! mouse-pressed)))

  (it "initial state"
      (reset! db/mem-db {})
      (sut/start-gui :mem)
      (let [{:keys [setup]} (apply hash-map (stub/last-invocation-of :sketch))
            initial-state (setup)]
        (should= :select-game-mode (:screen initial-state))
        (should= :gui (:ui initial-state))
        (should= ["X" "O"] (:markers initial-state))
        (should= :mem (:store initial-state))
        (should= "p1" (:turn initial-state))
        )))

  (context "ai turn"
    (it "returns next board and sleeps"
      (with-redefs [gamec/next-position (stub :play-turn {:return 0})]
        (let [result (sut/update-state ai-vs-human-state)]
          (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board result))
          (should= "p2" (:turn result)))))

    #_(it "allows game loop to check winner with ai games"
      (with-redefs [gamec/next-state (stub :next-state)
                    board/check-winner (stub :check-winner)]
        (sut/update-state {:board (vec (repeat 9 [[""]]))
                           :ui :gui
                           :screen :game
                           :players [:human :ai]
                           :turn "p2"
                           :difficulties [:easy :easy]})
        (should-not-have-invoked :check-winner)
        (should-have-invoked :next-state)))
    )

  )