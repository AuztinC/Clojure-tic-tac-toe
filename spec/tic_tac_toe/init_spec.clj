(ns tic-tac-toe.init-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))
(def ai-vs-ai-state {:id 123
                     :board (board/get-board :3x3)
                     :players [:ai :ai] :markers ["X" "O"]
                     :difficulties [:hard :hard]
                     :store :mem
                     :turn "p1"})

(def human-vs-ai-state {:id 123
                        :board (board/get-board :3x3)
                        :players [:human :ai]
                        :markers ["X" "O"]
                        :difficulties [:hard]
                        :store :mem
                        :turn "p1"})
(def ai-vs-human-state {:id 123
                        :board (board/get-board :3x3)
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

  (it "game over calls game-end!"
    (with-redefs [sut/end-game! (stub :end-game!)]
      (with-out-str (sut/game-loop (assoc human-vs-ai-state :board (repeat 9 ["X"]))))
      (should-have-invoked :end-game!)))

  (context "init and resume call game-loop"
    (it "init"
      (with-redefs [sut/game-loop (stub :game-loop)]
        (with-out-str (with-in-str "1\n7\n3" (sut/init-game human-vs-ai-state)))
        (should-have-invoked :game-loop)))
    )

  (it "print ID for end-game"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! 123 (board/get-board :3x3) :mem))
              "Game ID: ")))

  (context "storing moves"
    (it "stores a new move to :current-game"
      (let [new-state (sut/next-state
                        ai-vs-ai-state)
            saved-state (:current-game @db/mem-db)]
        (should= new-state saved-state)))

    (it "init game adds new entry to :previous-games and prints Game ID"
      (let [fixed-id 123
            state human-vs-ai-state
            expected-data {:id fixed-id
                           :moves []
                           :board-size :3x3}]
        (with-redefs [db/update-current-game! (stub :update-current-game!)
                      db/add-entry-to-previous! (stub :update-previous-games!)
                      printer/game-id (stub :print-game-id)
                      sut/game-loop (fn [_state] nil)]
          (sut/init-game state))
        (should-have-invoked :update-current-game! {:with [state]})
        (should-have-invoked :print-game-id {:with [fixed-id]})
        (should-have-invoked :update-previous-games!
          {:with [(:store state) expected-data]})))

    (it "calls move-fn with board and marker, then calls db/update-previous-games! appropriately"
      (reset! db/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3}]})
      (let [store     :mem
            game-id   1
            board  (board/get-board :3x3)
            marker    "X"
            fake-move 0
            move-fn (fn [_b _n] 0)
            db-stub   (stub :update-previous-games!)]
        (with-redefs [db/update-previous-games! db-stub]
          (sut/play-turn store game-id board move-fn [marker :human] nil)
          (should-have-invoked :update-previous-games!
            {:with [store
                    game-id
                    {:player marker :move fake-move}]}))))
    )

  )


