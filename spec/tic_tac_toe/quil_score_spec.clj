(ns tic-tac-toe.quil-score_spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.quil-core :as sut]
            [quil.core :as q]))


(focus-describe "quil"
  (with-stubs)
  (redefs-around [q/fill (stub :fill)
                  q/rect (stub :rect)
                  q/text (stub :text)])

  (it "draw-button"
    (sut/draw-button "text" 10 10 10 10)
    (should-have-invoked :fill {:with [255]})
    (should-have-invoked :text {:with ["text" 15 15]}))
  )