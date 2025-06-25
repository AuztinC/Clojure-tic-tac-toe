(ns tic-tac-toe.quil-score_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.quil-core :as sut]
            [quil.core :as q])
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
    (sut/draw-button "text" 10 10 10 10)
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
    (it "init-data! updates db"
      (with-redefs [db/update-current-game! (stub :update-current-game!)
                    db/add-entry-to-previous! (stub :add-entry-to-previous!)]
        (sut/init-data! human-vs-ai-state)
        (should-have-invoked :add-entry-to-previous! {:with [:mem {:id 123 :moves [] :board-size :3x3}]})
        (should-have-invoked :update-current-game! {:with [human-vs-ai-state]})))
    #_(it "select-game-mode calls select-board"
        (with-redefs [sut/draw (stub :draw)]
          (sut/mouse-pressed! {:screen :select-game-mode} {:x 21 :y 221})
          (should-have-invoked :draw)))

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
              new-state (assoc human-vs-ai-state :board [["X"][""][""][""][""][""][""][""][""]])]
          (should= new-state (sut/handle-in-game-click! new-state event))))
      )

    (context "ai turns"
      (it "game loop returns ai turn"
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