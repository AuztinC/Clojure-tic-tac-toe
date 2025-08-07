(ns tic-tac-toe.draw-spec
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
                                        focus-it
                                        should-not-have-invoked]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.draw :as sut]
            [tic-tac-toe.gamec :as game]
            [tic-tac-toe.config :as config]
            [tic-tac-toe.main :as main]))

(defn cssfn [target key]
  (.getPropertyValue (wire/style target) key))

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

  (redefs-around [config/auto-advance (stub :auto-advance)])

  (before (do
            (reset! config/state {:screen  :select-game-mode
                                 :ui      :web-cljs
                                 :turn    "p1"
                                 :markers ["X" "O"]})
            (wire/render [main/app])))


  (context "updated state atom with screen on click"

    (context "reset btn"
      (before (do
                (reset! config/state {:screen  :select-board
                                     :ui      :web-cljs
                                     :turn    "p1"
                                     :players [:human :ai]
                                     :markers ["X" "O"]})
                (wire/render [main/app])))
      (it "displays btn when :players exist"
        (should-select "#reset-btn"))

      (it "resets state when click"
        (wire/click! "#reset-btn")
        (should= config/starting-state @config/state)))

    (context "select-game-mode"
      (it "clicking Human vs AI sets screen to :select-board"
        (should= "Human vs AI" (wire/text "#human-vs-ai"))
        (wire/click! "#human-vs-ai")
        (should= :select-board (:screen @config/state))
        (should= [:human :ai] (:players @config/state)))

      (it "clicking AI vs Human sets screen to :select-board"
        (should= "AI vs Human" (wire/text "#ai-vs-human"))
        (wire/click! "#ai-vs-human")
        (should= :select-board (:screen @config/state))
        (should= [:ai :human] (:players @config/state)))

      (it "clicking Human vs Human sets screen to :select-board"
        (should= "Human vs Human" (wire/text "#human-vs-human"))
        (wire/click! "#human-vs-human")
        (should= :select-board (:screen @config/state))
        (should= [:human :human] (:players @config/state)))

      (it "clicking AI vs AI sets screen to :select-board"
        (should= "AI vs AI" (wire/text "#ai-vs-ai"))
        (wire/click! "#ai-vs-ai")
        (let [out @config/state]
          (should= :select-board (:screen out))
          (should= [:ai :ai] (:players out)))))

    (context "select-board"
      (before (do
                (reset! config/state {:screen  :select-board
                                     :ui      :web-cljs
                                     :turn    "p1"
                                     :markers ["X" "O"]})
                (wire/render [main/app])))
      (it "3x3"
        (should-select "#board-3x3")
        (should= "3x3" (wire/text "#board-3x3"))
        (wire/click! "#board-3x3")
        (should= :select-difficulty (:screen @config/state))
        (should= :3x3 (:board-size @config/state))
        (should= (board/get-board :3x3) (:board @config/state)))

      (it "4x4"
        (should-select "#board-4x4")
        (should= "4x4" (wire/text "#board-4x4"))
        (wire/click! "#board-4x4")
        (should= :select-difficulty (:screen @config/state))
        (should= :4x4 (:board-size @config/state))
        (should= (board/get-board :4x4) (:board @config/state)))

      (it "3x3x3"
        (should-select "#board-3x3x3")
        (should= "3x3x3" (wire/text "#board-3x3x3"))
        (wire/click! "#board-3x3x3")
        (should= :select-difficulty (:screen @config/state))
        (should= :3x3x3 (:board-size @config/state))
        (should= (board/get-board :3x3x3) (:board @config/state)))

      (it "skips difficulty if HvH"
        (reset! config/state {:screen  :select-board
                             :ui      :web-cljs
                             :players [:human :human]
                             :turn    "p1"
                             :markers ["X" "O"]
                             :board (board/get-board :3x3)})
        (wire/render [main/app])
        (should-select "#board-3x3")
        (wire/click! "#board-3x3")
        (should= :game (:screen @config/state))))
    )

  (context "calls select-difficulty with correct key"
    (before (do
              (reset! config/state {:screen  :select-difficulty
                                   :ui      :web-cljs
                                   :turn    "p1"
                                   :markers ["X" "O"]})
              (wire/render [main/app])))

    (it "easy"
      (with-redefs [config/select-difficulty! (stub :select-difficulty!)]
        (should-select "#easy")
        (should= "Easy" (wire/text "#easy"))
        (wire/click! "#easy")
        (should-have-invoked :select-difficulty! {:with [config/state :easy]})))

    (it "medium"
      (with-redefs [config/select-difficulty! (stub :select-difficulty!)]
        (should-select "#medium")
        (should= "Medium" (wire/text "#medium"))
        (wire/click! "#medium")
        (should-have-invoked :select-difficulty! {:with [config/state :medium]})))

    (it "hard"
      (with-redefs [config/select-difficulty! (stub :select-difficulty!)]
        (should-select "#hard")
        (should= "Hard" (wire/text "#hard"))
        (wire/click! "#hard")
        (should-have-invoked :select-difficulty! {:with [config/state :hard]}))))

  (context "drawing board"
    (before (do
              (reset! config/state {:screen     :game
                                   :ui         :web-cljs
                                   :turn       "p1"
                                   :markers    ["X" "O"]
                                   :players    [:human :ai]
                                   :board-size :3x3
                                   :board      (board/get-board :3x3)})
              (wire/render [main/app])))

    (redefs-around [board/check-winner (stub :check-winner {:return false})])

    (it "render-cell returns td with value"
      (let [out (sut/render-cell "index")]
        (should-contain :td out)
        (should-contain "index" out)))

    (it "render-board returns table with value"
      (let [out (sut/render-board {:board-size :3x3
                                   :ui         :web-cljs})]
        (should-contain :tbody out)
        (should-select "#game-board-3x3")))

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

    (context "click cell"
      (redefs-around [game/next-position (stub :next-position
                                           {:invoke (fn [state & _] state)})])
     (it "click cell, css (human vs ai)"

       (should-select "#cell-1")
       (should= "grey"
         (cssfn "#cell-1" "background-color"))
       (should= "60px"
         (cssfn "#cell-1" "width"))
       (should= "60px"
         (cssfn "#cell-1" "height"))
       (should= "pointer"
         (cssfn "#cell-1" "cursor"))
       (should= "1" (wire/text "#cell-1"))
       (wire/click! "#cell-1")
       (should-have-invoked :next-position))

    (it "click cell (ai vs ai)"
      (reset! config/state {:screen     :game
                            :ui         :web-cljs
                            :turn       "p1"
                            :markers    ["X" "O"]
                            :players    [:ai :ai]
                            :board-size :3x3
                            :board      (board/get-board :3x3)})
      (should-select "#cell-1")
      (should= "1" (wire/text "#cell-1"))
      (wire/click! "#cell-1")
      (should-not-have-invoked :next-position)))
    )

  (context "game over"
    (before (do
              (reset! config/state {:screen     :game-over
                                   :ui         :web-cljs
                                   :turn       "p1"
                                   :markers    ["X" "O"]
                                   :players    [:ai :ai]
                                   :board-size :3x3
                                   :board      (repeat 9 ["X"])})
              (wire/render [main/app])))

    (it "displays winning bard"
      (should-select "#main-container")
      (should-select ".cell")
      (should-contain "Game Over!" (wire/text "h1"))
      (should-contain "Winner is X" (wire/text "#winner")))

    (it "displays tie game"
      (reset! config/state (assoc @config/state :board [["X"] ["O"] ["O"]
                                                      ["O"] ["X"] ["X"]
                                                      ["X"] ["O"] ["O"]]))
      (wire/render [main/app])
      (should-select "#main-container")
      (should-select ".cell")
      (should-contain "Game Over!" (wire/text "h1"))
      (should-contain "Tie Game!" (wire/text "#winner"))))

  )