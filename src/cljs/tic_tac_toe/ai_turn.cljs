(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.ai-turnc :as turnc]))

(defmethod tic-tac-toe.gamec/next-position [:ai :web-cljs] [{:keys [board]} [marker _] diff]
  (turnc/ai-turn board marker diff))