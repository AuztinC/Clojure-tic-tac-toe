(ns tic-tac-toe.play-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.play-turn]))

(describe "play-turn multi method"
  (it "with difficulty runs :ai")
  (it "without difficulty runs :human")
  )