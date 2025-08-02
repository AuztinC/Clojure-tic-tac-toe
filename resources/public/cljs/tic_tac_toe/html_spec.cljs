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
                                        focus-context]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.html :as sut]
            [tic-tac-toe.game-setup :as setup]
            [tic-tac-toe.main :as main]))


(describe "main"
  (with-stubs)
  (wire/with-root-dom)
  (before (do
            (reset! setup/state {:screen :select-game-mode})
            (wire/render [main/app])))


  (focus-context "updated state atom with screen on click"
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
                  (reset! setup/state {:screen :select-board})
                  (wire/render [main/app])))
        (it "3x3"
          (should= "3x3" (wire/text "#board-3x3"))
          (wire/click! "#board-3x3")
          (should= :select-difficulty (:screen @setup/state))))
    )
  )