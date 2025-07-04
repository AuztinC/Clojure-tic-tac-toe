(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main tic-tac-toe.core
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.postgresql/postgresql "42.5.4"]
                 [org.clojure/java.jdbc     "0.7.12"]
                 [cheshire                  "5.10.2"]
                 [quil "4.3.1563"]]
  :profiles {:dev {:dependencies [[speclj "3.9.0"]]}}
  :plugins [[speclj "3.9.0"]]
  :test-paths ["spec", "src"])
