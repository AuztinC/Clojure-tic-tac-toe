(ns tic-tac-toe.init-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]))

(describe "tic tac toe"
  (with-stubs)
  (context "prints-game"

    (it "prints board first"
      (with-redefs [printer/display-board (stub :display-board)]
        (with-out-str
          (with-in-str "0\n3\n7"
            (sut/init-game {:board (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard]})))
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
                       :difficulties [:hard]})))
                "O wins!\n")))
    (it "ai-vs-human"
      (should (clojure.string/includes?
                (with-out-str
                  (with-in-str "0\n3\n7\n"
                    (sut/init-game
                      {:board (board/get-board :3x3)
                       :players [:ai :human]
                       :markers ["X" "O"]
                       :difficulties [:hard]})))
                "X wins!\n")))
    (it "ai-vs-ai"
      (should (clojure.string/includes?
                (with-out-str
                  (sut/init-game
                    {:board (board/get-board :3x3)
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard :hard]
                     :turn "p1" :store nil}))
                "tie")))
    )

  (it "game over calls game-end!"
    (with-redefs [sut/end-game! (stub :end-game!)]
      (with-out-str (sut/game-loop {:board (repeat 9 ["X"]) :players [:human :ai] :markers ["X" "O"] :difficulties [:easy] :store :file :turn "p1"}))
      (should-have-invoked :end-game!)))

  (it "print end-game ID"
    (should (clojure.string/includes?
              (with-out-str
                (sut/end-game! (board/get-board :3x3) :file))
              "Game ID: ")))

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
        (with-out-str (with-in-str "1\n7\n3" (sut/init-game {:size (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"] :difficulties [:hard]})))
        (should-have-invoked :game-loop))))
  )


