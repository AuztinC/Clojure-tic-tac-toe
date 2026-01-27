# Tic-Tac-Toe

A feature-rich Tic-Tac-Toe game implementation in Clojure with multiple interfaces (CLI, GUI, and Web), various board sizes, AI opponents, and game persistence.

## Features

- **Multiple Board Sizes**: 3x3, 4x4, and 3D 3x3x3
- **Multiple Game Modes**: 
  - Human vs Computer
  - Computer vs Human  
  - Human vs Human
  - Computer vs Computer
- **AI Difficulty Levels**: Easy, Medium, and Hard
- **Multiple Interfaces**:
  - Command-Line Interface (CLI)
  - GUI (using Quil)
  - Web Interface (ClojureScript + Reagent)
- **Game Persistence**: Save and resume games using:
  - In-memory storage
  - File-based storage (EDN)
  - PostgreSQL database
- **Replay System**: Watch replays of completed games by game ID

## Prerequisites

- [Clojure](https://clojure.org/guides/install_clojure) (version 1.12+)
- [Java](https://www.java.com/) (JDK 8 or higher)
- [PostgreSQL](https://www.postgresql.org/) (optional, for database persistence)
- [Leiningen](https://leiningen.org/) (optional, for legacy project.clj support)

## Installation

Clone the repository:

```bash
git clone https://github.com/AuztinC/Clojure-tic-tac-toe.git
cd Clojure-tic-tac-toe
```

## Running the Game

### CLI Mode (Default)

Run the game with in-memory storage:

```bash
clj -M:run
```

Run the game with file-based persistence:

```bash
clj -M:run -file
```

Run the game with PostgreSQL persistence:

```bash
clj -M:run -psql
```

**Note**: For PostgreSQL persistence, ensure you have:
1. PostgreSQL installed and running
2. Created a database named `tic-tac-toe`
3. Updated the database credentials in `src/clj/tic_tac_toe/psql.clj` if needed

### GUI Mode

Run the game with a graphical interface using Quil:

```bash
clj -M:run --gui
```

You can also combine GUI mode with different storage options:

```bash
clj -M:run --gui -file
clj -M:run --gui -psql
```

### Web Interface

To run the web-based version:

1. Build the ClojureScript application:

```bash
clj -M:cljs once
```

For development with auto-rebuild:

```bash
clj -M:cljs auto
```

2. Start the development server:

```bash
./bin/server
```

3. Open your browser to `http://localhost:8080`

## How to Play

### CLI Mode

When you start the game in CLI mode, you'll be guided through a series of prompts:

1. **Replay Option**: If there are previous games, you'll be asked if you want to watch a replay
   - Enter `1` to watch a replay (you'll need the game ID)
   - Enter `2` to start a new game

2. **Resume Game**: If there's an in-progress game, you'll be asked to resume
   - Enter `1` to continue the saved game
   - Enter `2` to start a new game

3. **Choose Game Mode**:
   - `1`: Human vs Computer (you play first)
   - `2`: Computer vs Human (computer plays first)
   - `3`: Human vs Human
   - `4`: Computer vs Computer

4. **Choose Board Size**:
   - `1`: 3x3 (classic)
   - `2`: 4x4 (larger board)
   - `3`: 3x3x3 (3D board)

5. **Choose AI Difficulty** (if playing against computer):
   - `1`: Easy
   - `2`: Medium
   - `3`: Hard
   
   If you selected Computer vs Computer, you'll choose difficulty for both AI players.

6. **Make Moves**: Enter the number corresponding to the position where you want to place your marker. The board displays available positions as numbers.

7. **Game ID**: Each game is assigned a unique ID for replay purposes.

### GUI Mode

In GUI mode, you'll interact with the game using mouse clicks:
- Click on buttons to select game options
- Click on board positions to make your move
- Visual feedback for game state and winner

### Web Interface

The web interface provides a modern, browser-based experience:
- Click-based interface for all game options
- Visual board representation
- Automatic AI turns (with slight delay for better UX)

## Running Tests

Run all tests using Speclj:

```bash
clj -M:spec
```

Or with the test alias:

```bash
clj -M:test -m speclj.main
```

## Project Structure

```
├── src/
│   ├── clj/          # Clojure source files (JVM)
│   │   └── tic_tac_toe/
│   │       ├── main.clj           # Main entry point
│   │       ├── game.clj           # Game loop logic
│   │       ├── game_options.clj   # Game setup and configuration
│   │       ├── cli_text.clj       # CLI display functions
│   │       ├── quil_core.clj      # GUI entry point
│   │       ├── quil_drawings.clj  # GUI rendering
│   │       ├── persistence.clj    # Persistence interface
│   │       ├── edn.clj            # File-based persistence
│   │       ├── psql.clj           # PostgreSQL persistence
│   │       ├── replay.clj         # Replay functionality
│   │       ├── ai_turn.clj        # AI move logic
│   │       └── human_turn.clj     # Human input handling
│   ├── cljs/         # ClojureScript source files (browser)
│   │   └── tic_tac_toe/
│   │       ├── main.cljs          # Web app entry point
│   │       ├── draw.cljs          # Web UI components
│   │       └── config.cljs        # Web app state management
│   └── cljc/         # Shared Clojure/ClojureScript code
│       └── tic_tac_toe/
│           ├── board.cljc         # Board logic and winning conditions
│           ├── gamec.cljc         # Core game logic
│           ├── configc.cljc       # Game configuration
│           └── ai_turnc.cljc      # AI algorithms
├── spec/             # Test files
├── resources/        # Resource files
│   ├── state.edn     # File-based game storage
│   └── public/       # Web interface assets
├── deps.edn          # Clojure dependencies
└── README.md         # This file
```

## Game Modes Explained

### Human vs Computer
You make the first move (X), and the computer responds (O).

### Computer vs Human  
The computer makes the first move (X), and you respond (O).

### Human vs Human
Two players take turns on the same device.

### Computer vs Computer
Watch two AI players compete. Great for testing AI algorithms!

## AI Difficulty Levels

- **Easy**: Makes random moves from available positions
- **Medium**: Uses basic strategy with some randomness
- **Hard**: Uses the Minimax algorithm for optimal play (nearly unbeatable)

## Storage Options

### In-Memory (Default)
- No flags needed
- Games are stored in memory only
- Data is lost when the application closes
- Fastest option, good for quick games

### File-Based (`-file`)
- Uses `resources/state.edn` to persist games
- Games survive application restarts
- Portable and easy to backup
- Good for single-user scenarios

### PostgreSQL (`-psql`)
- Requires PostgreSQL database setup
- Scalable for multiple users
- Supports concurrent access
- Professional-grade persistence

### Database Setup (PostgreSQL)

If you want to use PostgreSQL persistence:

1. Install PostgreSQL
2. Create the database:
   ```sql
   CREATE DATABASE "tic-tac-toe";
   ```
3. The application will automatically create the necessary tables on first run
4. Update connection settings in `src/clj/tic_tac_toe/psql.clj` if needed:
   - `dbname`: Database name (default: "tic-tac-toe")
   - `host`: Database host (default: "localhost")
   - `port`: Database port (default: 5432)
   - `user`: Your PostgreSQL username
   - `password`: Your PostgreSQL password

## Replay Functionality

Every completed game is saved with a unique game ID. To watch a replay:

1. Start the application
2. When prompted about watching a replay, select `Yes`
3. Enter the game ID
4. The game will replay move by move

Game IDs are displayed at the start and end of each game.

## Development

### Auto-compilation for Web Development

For active development of the web interface:

```bash
clj -M:cljs auto
```

This will watch for file changes and automatically recompile.

### REPL Development

Start a REPL for interactive development:

```bash
clj
```

Then load the main namespace:

```clojure
(require '[tic-tac-toe.main :as main])
(main/-main)
```

## License

Eclipse Public License - v 1.0

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

Austin Cripe (@AuztinC)
