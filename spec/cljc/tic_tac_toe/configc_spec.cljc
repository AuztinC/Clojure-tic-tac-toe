(ns tic-tac-toe.configc-spec
  (:require [speclj.core :refer [describe
                                 it
                                 should=
                                 context]]
            [tic-tac-toe.configc :as sut]))

(describe "config common"

  (context "difficulty"
   (it "single diff for human ai - moves to game screen"
    (let [state {:players [:human :ai]
                 :difficulties []
                 :screen :select-difficulty}
          out   (sut/select-difficulty state :easy)]
      (should= [:easy] (:difficulties out))
      (should= :game (:screen out))
      (should= [:human :ai] (:players out))))

  (it "double diff for ai ai - moves to game screen"
    (let [state {:players [:ai :ai]
                 :difficulties [:easy]
                 :screen :select-difficulty}
          out   (sut/select-difficulty state :hard)]
      (should= [:easy :hard] (:difficulties out))
      (should= :game (:screen out))))))