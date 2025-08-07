(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.ai-turnc :as aic]
            [tic-tac-toe.gamec :as game]))

(defn sleep []
  (Thread/sleep 500))

(defmethod game/next-position [:ai :cli] [{:keys [board]} [marker _] diff]
  (aic/ai-turn board marker diff))

(defn- gui-ai-turn [{:keys [board players] :as _state} marker diff]
  (when (= [:ai :ai] players)
    (sleep))
  (aic/ai-turn board marker diff))

(defmethod game/next-position [:ai :gui] [state [marker _] diff]
  (gui-ai-turn state marker diff))

(defmethod game/next-position [:ai :web] [state [marker _] diff]
  (gui-ai-turn state marker diff))


