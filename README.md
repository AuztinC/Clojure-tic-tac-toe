# Clojure Tic-Tac-Toe
A Tic-Tac-Toe implementation in Clojure supporting multiple execution modes and persistence backends.

The project includes:
- A **CLI-based game loop**
- An optional **Quil-powered GUI**
- Multiple persistence options (**in-memory**, **file**, **Postgres**)
- A **ClojureScript / web** setup - A full **Speclj** test suite The project is built and run using **Clojure CLI (deps.edn)**.
--- 
## Requirements - **Java (JDK 11+ recommended)** - **Clojure CLI (tools.deps)** Verify installation:
```bash
java -version
clojure -Sdescribe
```
## Install
```bash
git clone https://github.com/AuztinC/Clojure-tic-tac-toe.git
cd Clojure-tic-tac-toe
```
## Running the Game (CLI) ### Persistent Backends In Memory (Default)
```bash
clj -M:run
```
File-based persistence
```bash
clj -M:run -file
```
Postgres-backed persistence
```bash
clj -M:run -psql
```
When -psql is used, database setup is executed automatically via pg/db-setup. A running Postgres instance and correct configuration are required (see tic-tac-toe.psql). ## Running the Game (GUI)
```bash
clj -M:run --gui
```
Gui mode supports all persistence backends:
```bash
clj -M:run --gui -file
clj -M:run --gui -psql
```
## Testing Run the clj tests with:
```bash
clj -M:test:spec
```
Run the clj tests with auto-runner (watches clj files):
```bash
clj -M:test:spec -a
run the cljs tests (watches cljs files):
```
```bash
clj -Mtest:cljs
```
### ClojureScript / Web
This is not required for the CLI or GUI game.

Start the CLJS watcher/build
```bash
clj -M:test:cljs
```
This compiles ClojureScript and watches the following paths:
- src/cljs
- src/cljc
- spec/cljs
- spec/cljc

Verify this directory exists after compilation:

```text
resources/
└── public/
    └── cljs/
```

### Serve the compiled output

Compiled assets must be served over HTTP (not opened via file://).

Start a simple static server:
```bash
python3 -m http.server 8080 -d resources/public
```

Open in your browser: http://localhost:8080/

## Common CLJS issues
If you see an error like:
```text
net::ERR_FILE_NOT_FOUND
```
Try deleting your cljs directory and re-run the build command:
```text
resources/
└── public/
    └── cljs/  <-Delete this
```
Build again before serving public folder:
```bash
clj -M:test:cljs
```
