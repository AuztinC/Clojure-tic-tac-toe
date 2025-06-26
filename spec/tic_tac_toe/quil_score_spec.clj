(ns tic-tac-toe.quil-score_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.quil-core :as sut]
            [quil.core :as q]
            [tic-tac-toe.quil-drawings :as draw])
  (:import (java.time Duration)))

(def ai-vs-ai-state {:id 123
                     :screen :game
                     :mode :ai-v-ai
                     :board-size :3x3
                     :board (board/get-board :3x3)
                     :markers ["X" "O"]
                     :moves []
                     :store :mem
                     :typed-id ""
                     :turn "p1"
                     :players [:ai :ai]})

(def human-vs-ai-state {:id 123
                        :screen :game
                        :board-size :3x3
                        :board (board/get-board :3x3)
                        :markers ["X" "O"]
                        :store :mem
                        :typed-id ""
                        :turn "p1"
                        :players [:human :ai]})

(describe "quil"
  (with-stubs)
  (redefs-around [q/fill (stub :fill)
                  q/rect (stub :rect)
                  q/text (stub :text)])

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
      (with-redefs [sut/game-loop (stub :game-loop)]
        (sut/update-state ai-vs-ai-state)
        (should-have-invoked :game-loop)))

    (it "update-state returns state not in game"
      (let [state (assoc ai-vs-ai-state :screen :select-game-mode)]
       (with-redefs [sut/game-loop (stub :game-loop)]
        (should= state (sut/update-state state))
        (should-not-have-invoked :game-loop))))

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
        (with-redefs [db/set-new-game-id (stub :set-new-game-id)]
          (let [event {:x 55 :y 225}
                state {:screen :select-difficulty
                       :players [:human :ai]}
                result (sut/mouse-pressed! state event)]
            (should= :hard (first (:difficulties result))))))

      (it "selects two difficulties ai vs ai"
        (with-redefs [db/set-new-game-id (stub :set-new-game-id)]
          (let [event {:x 55 :y 225}
                state {:screen :select-difficulty
                       :players [:ai :ai]}
                result1 (sut/mouse-pressed! state event)
                result2 (sut/mouse-pressed! result1 event)]
            (should= [:hard :hard] (:difficulties result2)))))

      (it "replay can move to select-game-mode"
        (let [event {:x 225 :y 225}
              state {:screen :replay}
              result (sut/mouse-pressed! state event)]
          (should= :select-game-mode (:screen result))))

      (it "replay can move to replay-id-entry"
        (let [event {:x 125 :y 225}
              state {:screen :replay}
              result (sut/mouse-pressed! state event)]
          (should= :replay-id-entry (:screen result))))

      (it "clears typed-id"
        (let [event {:x 85 :y 305}
              state {:screen :replay-id-entry
                     :typed-id "123"}
              result (sut/mouse-pressed! state event)]
          (should= "" (:typed-id result))))

      (it "id entry adds game not found for bad entry"
        (with-redefs [db/find-game-by-id (stub :find-game-by-id)]
          (let [event {:x 225 :y 305}
                state {:screen :replay-id-entry
                       :typed-id "1"}
                result (sut/mouse-pressed! state event)]
            (should= "Game not found" (:typed-id result))
            (should-have-invoked :find-game-by-id {:with [{:store nil} 1]}))))

      (it "id entry updated typed-id on state"
        (with-redefs [draw/digit-positions {1 [175 255]}
                      db/find-game-by-id (stub :find-game-by-id)]
          (let [event {:x 175 :y 255}
                state {:screen :replay-id-entry
                       :typed-id ""}
                result (sut/mouse-pressed! state event)]
            (should= "1" (:typed-id result)))))

      (it "moves to replay for good id input"
        (with-redefs [draw/digit-positions {1 [175 255]}
                      db/find-game-by-id (stub :find-game-by-id {:return {:id 1}})
                      sut/replay (stub :replay)]
          (let [event {:x 225 :y 305}
                state {:screen :replay-id-entry
                       :typed-id "1"}]
            (sut/mouse-pressed! state event)
            (should-have-invoked :replay {:with [{:id 1}]}))))

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
            (should= :replay (:screen result)))))

      (it "in progress moves to select-game-mode if NO previous games detected"
        (with-redefs [db/in-progress? (stub :in-progress?)
                      db/previous-games? (stub :previous-games? {:return nil})]
          (let [event {:x 235 :y 225}
                state {:screen :in-progress-game}
                result (sut/mouse-pressed! state event)]
            (should= :select-game-mode (:screen result)))))

      )

    (it "init-data! updates db"
      (with-redefs [db/update-current-game! (stub :update-current-game!)
                    db/add-entry-to-previous! (stub :add-entry-to-previous!)]
        (sut/init-data! human-vs-ai-state)
        (should-have-invoked :add-entry-to-previous! {:with [:mem {:id 123 :moves [] :board-size :3x3}]})
        #_(should-have-invoked :update-current-game! {:with [human-vs-ai-state]})))

    (context "human input"

      (redefs-around [q/width (stub :q/width {:return 400})
                      db/update-previous-games! (stub :update-previous-games!)
                      sut/draw-game-screen (stub :draw-game-screen)])

      (it "click returns new selection and updates db "
        (let [event {:x 10 :y 10}]
          (sut/handle-in-game-click! human-vs-ai-state event)
          (should-have-invoked :update-previous-games! {:with [:mem 123 {:player "X", :move 0}]})
          (should-have-invoked :draw-game-screen)))

      (it "click on taken space returns same state"
        (let [event {:x 10 :y 10}
              new-state (assoc human-vs-ai-state :board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]])]
          (should= new-state (sut/handle-in-game-click! new-state event))))
      )

    (context "ai turns"
      (it "game loop invokes next-state, returning the updated board"
        (with-redefs [sut/sleep (stub :sleep)
                      sut/next-state (stub :next-state {:invoke :init})
                      db/update-previous-games! (stub :update-previous-games!)
                      init/play-turn (stub :play-turn {:return [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]})]
          (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
            (sut/game-loop ai-vs-ai-state))
          (should-have-invoked :sleep)
          (should-have-invoked :next-state {:with [ai-vs-ai-state [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]]})))

      )
    )
  )