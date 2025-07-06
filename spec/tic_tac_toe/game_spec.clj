(ns tic-tac-toe.game_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))
(def ai-vs-ai-state {:active-game true
                     :id 123
                     :board (board/get-board :3x3)
                     :board-size :3x3
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard :hard]
                     :store :mem
                     :turn "p1"})

(def human-vs-ai-state {:active-game true
                        :id 123
                        :board (board/get-board :3x3)
                        :board-size :3x3

                        :players [:human :ai]
                        :markers ["X" "O"]
                        :difficulties [:hard]
                        :store :mem
                        :turn "p1"})
(def ai-vs-human-state {:active-game true
                        :id 123
                        :board (board/get-board :3x3)
                        :board-size :3x3

                        :players [:ai :human]
                        :markers ["X" "O"]
                        :difficulties [:hard]
                        :store :mem
                        :turn "p1"})

(describe "tic tac toe"
  (with-stubs)
  (before (reset! db/mem-db {}))

  (context "prints-game"

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str (with-in-str "1\n3\n7\n"
          (sut/init-game human-vs-ai-state)))
        (should-have-invoked :display-board))))

  (context "Game-loop"
    (tags :slow)
    (it "Human-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/init-game
                      human-vs-ai-state)))
                "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/init-game
                      ai-vs-human-state)))
                "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (sut/init-game
                    ai-vs-ai-state))
                "tie"))))

  (context "game over"
    (it "game over calls game-end!"
      (with-redefs [sut/end-game! (stub :end-game!)]
        (with-out-str (sut/game-loop (assoc human-vs-ai-state :board (repeat 9 ["X"]))))
        (should-have-invoked :end-game!)))
    )

  (context "init and resume call game-loop"
    (it "init"
      (with-redefs [sut/game-loop (stub :game-loop)]
        (with-out-str (with-in-str "1\n7\n3" (sut/init-game human-vs-ai-state)))
        (should-have-invoked :game-loop)))
    )

  (it "print ID for end-game"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! {:id 123 :board (board/get-board :3x3)}))
              "Game ID: ")))

  (context "storing moves"
    (it "stores a new move to :current-game"
      (let [new-state (sut/next-state
                        ai-vs-ai-state)
            saved-state (:current-game @db/mem-db)]
        #_(should= new-state saved-state)))

    (it "init game adds new entry to :previous-games and prints Game ID"
      (let [fixed-id 123
            state human-vs-ai-state]
        (with-redefs [db/update-current-game! (stub :update-current-game!)
                      printer/game-id (stub :print-game-id)
                      sut/game-loop (fn [_state] nil)]
          (sut/init-game state))
        #_(should-have-invoked :update-current-game! {:with [state]})
        (should-have-invoked :print-game-id {:with [fixed-id]})))

    (it "calls db/update-previous-games!"
      (reset! db/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3}]})
      (with-out-str (with-in-str "0"(let [store :mem
            game-id 1
            board (board/get-board :3x3)
            marker "X"
            fake-move 0]
        (with-redefs []
          (sut/play-turn store game-id board [marker :human] nil)))))
      (let [store :mem
            game-id 1
            board (board/get-board :3x3)
            marker "O"
            fake-move 0
            db-stub (stub :update-previous-games!)]
        (with-redefs [tic-tac-toe.ai-turn/ai-turn (fn [_ _ _] 0)
                      db/update-previous-games! db-stub]
          (sut/play-turn store game-id board ["O" :ai] [:hard])
          )))
    )
  )


