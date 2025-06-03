(ns tic-tac-toe.init-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))

(describe "tic tac toe"
  (with-stubs)
  (before (reset! db/mem-db {}))

  (context "prints-game"

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str
          (with-in-str "0\n3\n7"
            (sut/init-game {:board (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard] :store :mem})))
        (should-have-invoked :display-board))))

  (context "Game-loop"
    (tags :slow)
    (it "Human-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/init-game
                      {:board (board/get-board :3x3)
                       :players [:human :ai] :markers ["X" "O"]
                       :difficulties [:hard]
                       :store :mem})))
                "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/init-game
                      {:board (board/get-board :3x3)
                       :players [:ai :human]
                       :markers ["X" "O"]
                       :difficulties [:hard]
                       :store :mem})))
                "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (sut/init-game
                    {:board (board/get-board :3x3)
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard :hard]
                     :turn "p1" :store :mem}))
                "tie"))))

  (it "game over calls game-end!"
    (with-redefs [sut/end-game! (stub :end-game!)]
      (with-out-str (sut/game-loop {:board (repeat 9 ["X"]) :players [:human :ai] :markers ["X" "O"] :difficulties [:easy] :store :mem :turn "p1"}))
      (should-have-invoked :end-game!)))

  (it "print end-game ID"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! (board/get-board :3x3) :mem))
              "Game ID: ")))

  (context "storing moves"
    (it "scores single human move"
      (reset! sut/stored-moves [])
      (sut/record-move! "X" 0)
      (should= [{:player "X" :move 0}] @sut/stored-moves))

    (it "stores multiple moves"
      (reset! sut/stored-moves [])
      (sut/record-move! "X" 0)
      (sut/record-move! "O" 3)
      (should= [{:player "X" :move 0}{:player "O" :move 3}] @sut/stored-moves)))

  #_(context "end game data has correct params"
      (it "correct board"
        (let [data {:id 1
                    :moves @sut/stored-moves
                    :board-size (case (count (board/get-board :3x3))
                                  9 :3x3
                                  16 :4x4
                                  :3x3x3)}]
          (sut/end-game! (board/get-board :3x3) :file)
          (should-have-invoked :update-previous-games!))))

  #_(context "resume game"
    (it "maintain state"
      (let [state {:board (board/get-board :3x3)
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard :hard]
                   :turn "p1" :store :file}]
        (with-redefs [db/edn-state {:current-game state}
                      sut/game-loop (stub :game-loop)]
          (sut/resume-game)
          (should-have-invoked :game-loop))))
    )

  (context "init and resume call game-loop"
    (it "init"
      (with-redefs [sut/game-loop (stub :game-loop)]
        (with-out-str (with-in-str "1\n7\n3" (sut/init-game {:size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard] :store :mem})))
        (should-have-invoked :game-loop))))
  )


