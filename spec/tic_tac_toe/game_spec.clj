(ns tic-tac-toe.game_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))
(def ai-vs-ai-state {:ui           :cli
                     :active-game  true
                     :id           123
                     :board        (board/get-board :3x3)
                     :board-size   :3x3
                     :players      [:ai :ai]
                     :markers      ["X" "O"]
                     :difficulties [:hard :hard]
                     :store        :mem
                     :turn         "p1"})

(def human-vs-ai-state {:ui           :cli
                        :active-game  true
                        :id           123
                        :board        (board/get-board :3x3)
                        :board-size   :3x3
                        :screen       :game
                        :players      [:human :ai]
                        :markers      ["X" "O"]
                        :difficulties [:hard]
                        :store        :mem
                        :turn         "p1"})
(def ai-vs-human-state {:ui           :cli
                        :active-game  true
                        :id           123
                        :board        (board/get-board :3x3)
                        :board-size   :3x3
                        :screen       :game
                        :players      [:ai :human]
                        :markers      ["X" "O"]
                        :difficulties [:hard]
                        :store        :mem
                        :turn         "p1"})

(describe "tic tac toe"
  (with-stubs)
  (before (reset! db/mem-db {}))

  (context "prints-game"

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str (with-in-str "1\n3\n7\n"
                        (sut/game-loop human-vs-ai-state)))
        (should-have-invoked :display-board))))

  (context "Game-loop"
    (tags :slow)
    (it "Human-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/game-loop
                      human-vs-ai-state)))
                "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/game-loop
                      ai-vs-human-state)))
                "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes?
                (with-out-str (sut/game-loop
                                ai-vs-ai-state))
                "tie"))))

  (context "game over"
    (it "game over calls game-end!"
      (with-redefs [sut/end-game! (stub :end-game!)]
        (with-out-str (sut/game-loop {:screen :game-over}))
        (should-have-invoked :end-game!)))
    )

  (context "init and resume call game-loop"
    (it "init"
      (with-redefs [sut/game-loop (stub :game-loop)]
        (with-out-str (with-in-str "1\n7\n3" (sut/game-loop human-vs-ai-state)))
        (should-have-invoked :game-loop)))
    )

  (it "print ID for end-game"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! {:id 123 :board (board/get-board :3x3)}))
              "Game ID: ")))

  (context "Next-state stores a new move, updates turn and board"
    ;; TODO ARC - update tests for next-state
    (redefs-around [db/update-current-game! (stub :update-current-game!)
                    sut/next-position (stub :next-position {:return 0})])
    (it "AI turn"
      (let [new-state (sut/next-state ai-vs-ai-state)]
        (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board new-state))
        (should= "p2" (:turn new-state))
        (should-have-invoked :update-current-game! {:with [new-state 0]})))
    (it "Human turn"
      (let [new-state (sut/next-state human-vs-ai-state)]
        (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board new-state))
        (should= "p2" (:turn new-state))
        (should-have-invoked :update-current-game! {:with [new-state 0]}))
      )

    )
  )


