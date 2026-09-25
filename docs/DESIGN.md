# Tic-Tac-Toe Shift Game - Design Document

## Project Brief

Walter's Tic-Tac-Toe Shift is an innovative twist on the classic tic-tac-toe game. Instead of ending in draws/ties, the board dynamically shifts when filled, creating a continually evolving gameplay where every game has a winner. Built with vanilla HTML, CSS, and JavaScript, it provides a zero-build, browser-ready gaming experience with theme switching and shift animations.

**Target**: Players who want a classic game with a modern twist - fast-paced, no stalemates, and rewarding strategic planning.

## Game Rules

1. **Players**: Two players alternate turns (X starts first, then O)
2. **Board**: 3×3 grid with 9 cells
3. **Objective**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Shift Mechanic**: When board fills with no winner:
   - Board automatically shifts (right → left → down → up, cycling)
   - One row/column disappears
   - Pieces that occupied that row/column are removed
   - Game continues with remaining pieces
5. **Win Condition**: Three symbols in a line = immediate win with party popper celebration (🎉 confetti animation)
6. **Auto-Reset**: Game automatically restarts 3 seconds after a win

## The Shift Mechanic - Key Innovation

### Why Shift Instead of Draw?

Traditional tic-tac-toe with perfect play always ends in a draw. This game reimagines the endgame by introducing the **shift mechanic**:

- **No stalemates**: Every game has a winner
- **Dynamic gameplay**: The board changes shape, creating new opportunities
- **Strategic depth**: Players must think about piece positioning relative to future shifts
- **Engagement**: Shifts add excitement and break monotony

### How Shifts Work

Shifts cycle through four directions in order: **Right → Left → Down → Up**

| Direction | Effect | Lost Content |
|-----------|--------|--------------|
| **Right** | Board moves right | Leftmost column removed |
| **Left** | Board moves left | Rightmost column removed |
| **Down** | Board moves down | Top row removed |
| **Up** | Board moves up | Bottom row removed |

### Strategic Implications

1. **Early game**: Players don't think about shifts
2. **Mid-game**: As board fills, shift direction becomes predictable
3. **Late-game**: Skilled players can position pieces to survive shifts and set up wins
4. **Tension**: Each turn closer to the board fills increases suspense

## Theme Options

### Normal Theme
- Uses traditional X and O symbols
- Purple gradient background (#667eea to #764ba2)
- Blue accent colors

### Mid-Autumn Festival Theme
- X becomes 🥮 (moon cake)
- O becomes 🏮 (lantern)
- Warm orange/brown gradient background (#d4a574 to #c87137)
- Themed visual presentation while maintaining game mechanics

## Design Decision: Shift Mechanics vs. "No Draw" Rule

### The Challenge
The original requirement stated "no draw" - but traditional tic-tac-toe with optimal play **always** results in either a win or a draw. These are mathematically mutually exclusive concepts.

### The Solution: Shift Mechanic
Rather than ignoring draws or forcing winners artificially, we created the **shift mechanic** that:

1. **Respects game logic**: Makes it mathematically possible to eliminate draws
2. **Adds depth**: Creates new strategic dimensions
3. **Maintains fairness**: Both players affected equally by shifts
4. **Increases engagement**: Each shift resets the game state dynamically
5. **Guarantees winners**: Continuous play until someone wins three in a row

### Why This Is Better Than "No Draw"

- "No draw" alone is an impossible rule (contradicts tic-tac-toe math)
- Shift mechanic makes it mathematically **possible** to have no draws
- Provides fun, engaging gameplay instead of arbitrary rule-breaking
- Creates unique game experience you can't get elsewhere

## Technical Implementation

### Frontend Stack
- **HTML**: Semantic structure with accessible button elements
- **CSS**: Grid layout, animations, theme transitions, shift flash effects
- **JavaScript**: Game logic, state management, shift algorithm, event handling

### Key Features
- **Shift Animation**: Visual feedback when board shifts with flash effect
- **Shift Counter**: Displays current shift count to track game progression
- **Responsive Design**: Works on desktop and mobile
- **Smooth Animations**: 
  - Celebration animation on game end
  - Confetti effect for visual celebration
  - Theme transition effects
  - Shift flash animation
- **State Management**: Clean board state tracking with shift logic
- **Accessible**: Proper button semantics and keyboard support
- **No Dependencies**: Vanilla JS - zero build overhead

### Shift Algorithm

```javascript
// Example: Shift Right
// - Save state of rightmost column
// - Clear rightmost column to empty
// - Move each column right (shift left content right)
// - Clear leftmost column to empty
// Result: Left column gone, everything moves left visually

shiftBoard(direction) {
    // Copy current state
    const newState = [...this.gameState];
    
    if (direction === 'right') {
        // Clear right column
        newState[2] = '';
        newState[5] = '';
        newState[8] = '';
        
        // Shift columns right (content from left → right)
        for (let i = 2; i > 0; i--) {
            newState[i] = newState[i - 1];
            newState[i + 3] = newState[i + 2];
            newState[i + 6] = newState[i + 5];
        }
        
        // Clear new left column
        newState[0] = '';
        newState[3] = '';
        newState[6] = '';
    }
    // ... similar for left, up, down
    
    return newState;
}
```

### File Structure
```
walter-tic-tac-toe/
├── index.html                  Game + logic
├── docs/
│   ├── index.html             Game file for GitHub Pages
│   ├── README.md              Documentation landing page
│   ├── RULES.md               Player rules
│   └── DESIGN.md              This file
├── tests/
│   ├── game.test.js           Test suite (18+ test cases)
│   └── index.html             Test runner with UI
├── transcript/
│   └── session_2026-09-25.json Session transcript
└── README.md                   Setup instructions
```

## Testing

Comprehensive test suite with 18+ test cases covering:
- **Shift Logic**: Each direction (right, left, up, down)
- **Board Preservation**: Correct pieces survive shifts
- **Win Conditions**: All 8 win patterns (3 rows, 3 cols, 2 diagonals)
- **Game State**: Full board, empty cells, placement validation
- **Multi-Shift Scenarios**: Multiple shifts before winning
- **Edge Cases**: Occupied cells, shift sequences

Run tests: Open `/tests/index.html` in browser

## Deployment

The game is served via:
1. Direct file access (open index.html)
2. Python HTTP server: `python3 -m http.server`
3. GitHub Pages (via docs folder)

No build step required - pure web standards compatibility.

## Future Considerations

- Multiplayer via WebSockets with shift synchronization
- AI opponent (easy/medium/hard difficulty) with shift prediction
- Score tracking across multiple games
- Sound effects for shifts and wins
- Shift direction selection by players
- Extended board size (4×4, 5×5) with multiple shifts per game
- Accessibility enhancements (ARIA labels)
