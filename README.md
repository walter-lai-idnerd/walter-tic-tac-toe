# Tic-Tac-Toe Shift Game

A revolutionary twist on classic tic-tac-toe where the board **shifts instead of draws**. No more stalemates - the game continues until someone wins!

Built with vanilla HTML, CSS, and JavaScript. Zero build required.

## 🎮 Play Online

[**Play the game directly in your browser**](https://walter-lai-idnerd.github.io/walter-tic-tac-toe)

## Features

✨ **Two-player gameplay** - X goes first, players alternate turns  
🎨 **Theme switching** - Normal mode (X/O) or Mid-Autumn Festival theme (🥮/🏮)  
🎉 **Celebration animations** - Party popper confetti on win  
🔄 **Dynamic shifts** - Board shifts when full instead of draw/tie  
⚡ **Zero build required** - Pure HTML, CSS, and JavaScript  
📱 **Responsive** - Works on desktop and mobile  
🧪 **18+ Test Cases** - Comprehensive test suite with visual runner  

## The Shift Mechanic

When all 9 cells are filled without a winner, the board **shifts** in one of four directions (cycling: right → left → down → up):

```
Before Shift (Right):    After Shift:
X O X                   _ X O
X O X            →      _ X O
O X O                   _ O X
```

The board shifts, one row/column disappears, and the game continues!

**Why?** Traditional tic-tac-toe always ends in a draw with perfect play. This mechanic ensures **every game has a winner** while staying fair and fun.

## How to Play

1. Click an empty cell to place your symbol (X goes first)
2. Win by getting three symbols in a row (horizontal, vertical, or diagonal)
3. **When the board fills**, it shifts instead of ending in a tie
4. Game continues until someone gets three in a row
5. Win condition can happen:
   - On your normal turn
   - Immediately after a shift (if the shift creates three in a row)

## Running Locally

### Option 1: Using Python's HTTP Server (Recommended)

```bash
cd walter-tic-tac-toe
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

### Option 2: Direct File Access

Simply open `index.html` in your web browser.

## Documentation

- **[Game Rules](./docs/RULES.md)** - Complete rules and shift mechanics explained
- **[Design Document](./docs/DESIGN.md)** - Design decisions and why shifts solve the draw problem
- **[Test Documentation](./docs/TESTS.md)** - 18+ test cases for game mechanics

## Testing

Run the comprehensive test suite:

```bash
# Browser (Recommended)
# Open: /tests/index.html in your browser

# Or via HTTP server
python3 -m http.server
# Then visit: http://localhost:8000/tests/

# Or Node.js
node tests/game.test.js
```

### Test Coverage

- ✅ **4 Shift directions** - All shift mechanics tested
- ✅ **8 Win conditions** - All winning patterns covered
- ✅ **Game state** - Full/empty board detection
- ✅ **Game mechanics** - Placement, shifts, multi-shift scenarios
- ✅ **18+ test cases** - Comprehensive coverage

## File Structure

```
walter-tic-tac-toe/
├── index.html              Main game file with CSS and JavaScript
├── docs/
│   ├── index.html          Game file for GitHub Pages
│   ├── README.md           Documentation landing page
│   ├── RULES.md            Game rules and shift mechanics
│   ├── DESIGN.md           Design document with shift rationale
│   └── TESTS.md            Test documentation
├── tests/
│   ├── game.test.js        Complete test suite (18+ tests)
│   └── index.html          Visual test runner
├── transcript/
│   └── session_2026-09-25.json  Session transcript
└── README.md               This file
```

## Theme Switching

Click the **🌙 Mid-Autumn** button in the top right to toggle themes:
- **Normal**: X and O with purple gradient
- **Mid-Autumn Festival**: 🥮 Moon cake and 🏮 Lantern with warm gradient

## Game Stats

The game tracks:
- **Current Player**: Whose turn it is
- **Shift Count**: How many times the board has shifted
- **Shift Direction**: Visual feedback when board shifts
- **Win Status**: Announcement when someone wins

## Strategy Tips

1. **Early game**: Build your pieces toward potential three-in-a-row
2. **Mid-game**: Think about the next shift direction (right → left → down → up)
3. **Late-game**: Position pieces to survive the next shift
4. **Advanced**: Predict shift patterns and set up pieces for post-shift opportunities

Example: If a right shift is coming, place your pieces in the middle/right columns to survive.

## Repository

- **GitHub**: [walter-tic-tac-toe](https://github.com/walter-lai-idnerd/walter-tic-tac-toe)
- **GitHub Pages**: [Play Online](https://walter-lai-idnerd.github.io/walter-tic-tac-toe)
- **Tests**: [/tests/index.html](/tests/index.html)

## Why Shift Instead of Draw?

Read the [Design Document](./docs/DESIGN.md) for the complete argument. TL;DR:
- Traditional tic-tac-toe always ends in draw with perfect play (mathematically proven)
- "No draw" rules are impossible without changing game fundamentally
- **Shift mechanic** solves this by:
  - Making it possible to eliminate draws
  - Adding strategic depth
  - Creating engaging, exciting gameplay
  - Guaranteeing every game has a winner

Enjoy the game! 🎮
