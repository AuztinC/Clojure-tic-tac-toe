(ns tic-tac-toe.spec-helper
  (:require [clojure.java.jdbc :as jdbc]
            [speclj.core :refer :all]
            [tic-tac-toe.psql :as pg]))

(defn stub-jdbc []
  (redefs-around [jdbc/execute! (stub :execute!)]))
(defn should-initialize-db []
  (should-have-invoked :execute! {:with
                                  [pg/psql-spec
                                   ["CREATE TABLE IF NOT EXISTS games(id SERIAL PRIMARY KEY, screen TEXT, p1 TEXT, p2 TEXT, diff1 TEXT, diff2 TEXT, boardsize TEXT)"]]})
  (should-have-invoked :execute! {:with
                                  [pg/psql-spec
                                   ["CREATE TABLE IF NOT EXISTS moves(id SERIAL PRIMARY KEY, gameId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), position INTEGER, player TEXT)"]]}))