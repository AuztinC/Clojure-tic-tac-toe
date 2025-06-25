(ns tic-tac-toe.quil-score_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.quil-core :as sut]
            [quil.core :as q]))


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
    (let [state {}]
      (should= :easy (sut/->difficulty 300 230))
      (should= :medium (sut/->difficulty 180 221))
      (should= :hard (sut/->difficulty 100 230))
      (should= nil (sut/->difficulty 10 50))))

  (context "state changes"
    #_(it "select-game-mode calls select-board"
      (with-redefs [sut/draw (stub :draw)]
        (sut/mouse-pressed! {:screen :select-game-mode} {:x 21 :y 221})
        (should-have-invoked :draw)))
    )
  )