(ns tic-tac-toe.psql-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.psql :as sut]
            [tic-tac-toe.persistence :as db]))

#_(describe "postgresql persistence"
  (context "writing"
    (it "creates new current_game table on init"
      (should= -1 (sut/create-new-current-game)))))
