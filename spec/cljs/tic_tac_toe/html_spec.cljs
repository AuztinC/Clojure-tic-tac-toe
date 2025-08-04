(ns tic-tac-toe.html-spec
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
                                        should-have-count
                                        focus-it]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.html :as sut]
            [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.setup :as setup]
            [tic-tac-toe.main :as main]))

(defn cell-count [size]
  (let [state {:board-size size
               :board      (board/get-board size)}
        out (sut/render-board state)
        [_tag _attrs & rows] out
        row-count (count rows)
        column-count (count (drop 2 (first rows)))
        cell-count (* row-count column-count)]
    {:row-count    row-count
     :column-count column-count
     :cell-count   cell-count}))


(describe "main"
  (with-stubs)
  (wire/with-root-dom)

  (redefs-around [setup/auto-advance (stub :auto-advance)])

  (before (do
            (reset! setup/state {:screen :select-game-mode
                                 :ui :web-cljs
                                 :turn "p1"
                                 :markers ["X" "O"]})
            (wire/render [main/app])))


  (context "updated state atom with screen on click"
    (context "select-game-mode"
      (it "clicking Human vs AI sets screen to :select-board"
        (should= "Human vs AI" (wire/text "#human-vs-ai"))
        (wire/click! "#human-vs-ai")
        (should= :select-board (:screen @setup/state))
        (should= [:human :ai] (:players @setup/state)))

      (it "clicking AI vs Human sets screen to :select-board"
        (should= "AI vs Human" (wire/text "#ai-vs-human"))
        (wire/click! "#ai-vs-human")
        (should= :select-board (:screen @setup/state))
        (should= [:ai :human] (:players @setup/state)))

      (it "clicking Human vs Human sets screen to :select-board"
        (should= "Human vs Human" (wire/text "#human-vs-human"))
        (wire/click! "#human-vs-human")
        (should= :select-board (:screen @setup/state))
        (should= [:human :human] (:players @setup/state)))

      (it "clicking AI vs AI sets screen to :select-board"
        (should= "AI vs AI" (wire/text "#ai-vs-ai"))
        (wire/click! "#ai-vs-ai")
        (let [out @setup/state]
          (should= :select-board (:screen out))
          (should= [:ai :ai] (:players out)))))

    (context "select-board"
      (before (do
                (reset! setup/state {:screen :select-board
                                     :ui :web-cljs
                                     :turn "p1"
                                     :markers ["X" "O"]})
                (wire/render [main/app])))
      (it "3x3"
        (should-select "#board-3x3")
        (should= "3x3" (wire/text "#board-3x3"))
        (wire/click! "#board-3x3")
        (should= :select-difficulty (:screen @setup/state))
        (should= :3x3 (:board-size @setup/state))
        (should= (board/get-board :3x3) (:board @setup/state)))

      (it "4x4"
        (should-select "#board-4x4")
        (should= "4x4" (wire/text "#board-4x4"))
        (wire/click! "#board-4x4")
        (should= :select-difficulty (:screen @setup/state))
        (should= :4x4 (:board-size @setup/state))
        (should= (board/get-board :4x4) (:board @setup/state)))

      (it "3x3x3"
        (should-select "#board-3x3x3")
        (should= "3x3x3" (wire/text "#board-3x3x3"))
        (wire/click! "#board-3x3x3")
        (should= :select-difficulty (:screen @setup/state))
        (should= :3x3x3 (:board-size @setup/state))
        (should= (board/get-board :3x3x3) (:board @setup/state))))
    )

  (context "calls select-difficulty with correct key"
    (before (do
              (reset! setup/state {:screen :select-difficulty
                                   :ui :web-cljs
                                   :turn "p1"
                                   :markers ["X" "O"]})
              (wire/render [main/app])))

    (it "easy"
      (with-redefs [setup/select-difficulty! (stub :select-difficulty!)]
        (should-select ".easy")
        (should= "Easy" (wire/text ".easy"))
        (wire/click! ".easy")
        (should-have-invoked :select-difficulty! {:with [:easy]})))

    (it "medium"
      (with-redefs [setup/select-difficulty! (stub :select-difficulty!)]
        (should-select ".medium")
        (should= "Medium" (wire/text ".medium"))
        (wire/click! ".medium")
        (should-have-invoked :select-difficulty! {:with [:medium]})))

    (it "hard"
      (with-redefs [setup/select-difficulty! (stub :select-difficulty!)]
        (should-select ".hard")
        (should= "Hard" (wire/text ".hard"))
        (wire/click! ".hard")
        (should-have-invoked :select-difficulty! {:with [:hard]}))))

  (context "drawing board"
    (before (do
              (reset! setup/state {:screen :game
                                   :ui :web-cljs
                                   :turn "p1"
                                   :markers ["X" "O"]
                                   :players [:human :ai]
                                   :board-size :3x3
                                   :board (board/get-board :3x3)})
              (wire/render [main/app])))

    (it "render-cell returns td with value"
      (let [out (sut/render-cell "index")]
        (should-contain :td out)
        (should-contain "index" out)))

    (it "render-board returns table with value"
      (let [out (sut/render-board {:board-size :3x3
                                   :ui         :web-cljs})]
        (should-contain :tbody out)))

    (it "gives nine cells for 3x3"
      (let [out (cell-count :3x3)]
        (should= 3 (:row-count out))
        (should= 3 (:column-count out))
        (should= 9 (:cell-count out))))

    (it "gives 16 cells for 4x4"
      (let [out (cell-count :4x4)]
        (should= 4 (:row-count out))
        (should= 4 (:column-count out))
        (should= 16 (:cell-count out))))

    (it "gives 27 cells for 3x3x3"
      (let [out (cell-count :3x3x3)]
        (should= 3 (:row-count out))
        (should= 9 (:column-count out))
        (should= 27 (:cell-count out))))

    (it "click cell"
      (with-redefs [ht/apply-human-move
                    (stub :apply-human-move
                      {:return {:screen     :game
                                :board-size :3x3
                                :board      []}})]
        (should-select "#cell")
        (should= "0" (wire/text "#cell"))
        (wire/click! "#cell")
        (should-have-invoked :apply-human-move)))
    )

  )