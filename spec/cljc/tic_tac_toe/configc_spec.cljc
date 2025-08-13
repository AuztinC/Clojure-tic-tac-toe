(ns tic-tac-toe.configc-spec
  (:require [speclj.core :refer [describe
                                 it
                                 should=
                                 context]]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.configc :as sut]))

(describe "config common"

  (context "difficulty"
    (it "single diff for human ai - moves to game screen"
      (let [state {:players      [:human :ai]
                   :difficulties []
                   :screen       :select-difficulty}
            out (sut/select-difficulty state :easy)]
        (should= [:easy] (:difficulties out))
        (should= :game (:screen out))
        (should= [:human :ai] (:players out))))

    (it "double diff for ai ai - moves to game screen"
      (let [state {:players      [:ai :ai]
                   :difficulties [:easy]
                   :screen       :select-difficulty}
            out (sut/select-difficulty state :hard)]
        (should= [:easy :hard] (:difficulties out))
        (should= :game (:screen out)))))

  (context "select game"
    (it "picks a game mode - moves to select-board"
      (let [out (sut/select-game {} 1)]
        (should= [:human :ai] (:players out))
        (should= :select-board (:screen out))))

    (it "returns same state for bad input"
      (should= {} (sut/select-game {} 10))))

  (context "select board"
    (it "picks a board and adds board size - moves to select-difficulty"
      (let [out (sut/select-board {} 1)]
        (should= :3x3 (:board-size out))
        (should= (board/get-board :3x3) (:board out))
        (should= :select-difficulty  (:screen out))))

    (it "returns initial state for bad input"
      (should= {} (sut/select-board {} 10))))
  )