# Tic-Tac-Toe Shift Game

A revolutionary twist on classic tic-tac-toe where the board **shifts instead of draws**. No more stalemates - every game has a winner!

## 🎮 [Play the Game](./index.html)

Click above to play directly in your browser!

## Features

✨ **Two-player gameplay** - X goes first, players alternate turns  
🎨 **Theme switching** - Normal mode (X/O) or Mid-Autumn Festival theme (🥮/🏮)  
🎉 **Celebration animations** - Party popper confetti on win  
🔄 **Dynamic shifts** - Board shifts when full instead of draw/tie  
⚡ **Zero build required** - Pure HTML, CSS, and JavaScript  
📱 **Responsive** - Works on desktop and mobile  
🧪 **18+ Test Cases** - Comprehensive test suite with visual runner  

## The Shift Mechanic

When the board fills up, instead of a tie, the board **shifts**:

```
Before Shift:        After Shift Right:
X O X        →       _ X O
X O X        →       _ X O
O X O        →       _ O X
```

Shifts cycle through: Right → Left → Down → Up → Right...

**Every shift removes one row or column, ensuring the game continues until someone wins!**

## Quick Start

### Online
Just click **[Play the Game](./index.html)** above!

### Local

```bash
git clone https://github.com/walter-lai-idnerd/walter-tic-tac-toe.git
cd walter-tic-tac-toe
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

## How to Play

1. **Click** an empty cell to place your symbol (X goes first)
2. **Win** by getting three symbols in a row
3. **When board fills**, it shifts instead of drawing
4. **Continue** until someone wins - no draws!

## Documentation

- **[Game Rules](./RULES.md)** - Complete shift mechanic explanation with examples
- **[Design Document](./DESIGN.md)** - Why shifts? Design decisions and strategy
- **[Test Documentation](./TESTS.md)** - 18+ comprehensive test cases

## Run Tests

[Open Test Runner](/tests/index.html) - Visual test interface showing all 18+ test cases

Or from command line:
```bash
node tests/game.test.js
```

## Theme Switch

Click **🌙 Mid-Autumn** button to switch themes:
- **Normal**: Traditional X/O
- **Mid-Autumn**: 🥮 Moon cake and 🏮 Lantern

Game plays identically - just different visuals!

## Why This Game?

Traditional tic-tac-toe with optimal play always ends in a draw. This game **solves that** with the shift mechanic:

✅ Guarantees a winner  
✅ Fair to both players  
✅ Adds strategic depth  
✅ Creates exciting gameplay  

Learn more in the [Design Document](./DESIGN.md).

## Links

- **[Rules](./RULES.md)** - What you need to know to play
- **[Design](./DESIGN.md)** - Why and how it works
- **[Tests](./TESTS.md)** - Technical test details
- **[GitHub](https://github.com/walter-lai-idnerd/walter-tic-tac-toe)** - Source code
- **[Test Runner](/tests/index.html)** - Run tests in browser

Enjoy the game! 🎮
