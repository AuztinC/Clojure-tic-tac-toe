(ns tic-tac-toe.game_spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 should
                                 before
                                 context
                                 tags
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=
                                 focus-it]]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.cli-text :as printer]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.ai-turnc :as aic]))
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


  (context "cli next state"
   (redefs-around [db/update-current-game! (stub :update-current-game!)
                  aic/ai-turn (stub :ai-turn {:return 0})
                  read-line (stub :read-line {:return "0"})])
  (it "AI turn cli"
    (let [new-state (gamec/next-state ai-vs-ai-state)]
      (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board new-state))
      (should= "p2" (:turn new-state))
      (should-have-invoked :update-current-game! {:with [new-state 0]})))
  (it "Human turn cli"
    (with-out-str
      (let [new-state (gamec/next-state human-vs-ai-state)]
        (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board new-state))
        (should= "p2" (:turn new-state))
        (should-have-invoked :update-current-game! {:with [new-state 0]})))))

  (context "Game-loop"
    (tags :slow)

    (it "prints board"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str
          (with-in-str "1\n3\n7\n"
            (sut/game-loop human-vs-ai-state)))
        (should-have-invoked :display-board {:times 8})))

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


  (it "print ID for end-game"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! {:id 123 :board (board/get-board :3x3)}))
              "Game ID: ")))


  )


