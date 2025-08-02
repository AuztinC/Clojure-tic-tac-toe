(ns tic-tac-toe.game-setup
  (:require [reagent.core :as r]))

(defonce state (r/atom {:screen :select-game-mode}))