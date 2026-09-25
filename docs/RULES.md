# Tic-Tac-Toe Shift - Game Rules

## Basic Gameplay

1. **Players**: The game is played by two players - Player 1 (X) and Player 2 (O)
2. **Board**: The game uses a 3×3 grid with 9 cells
3. **Turn Order**: Player 1 (X) always goes first, then players alternate turns

## How to Play

1. On your turn, click an empty cell to place your symbol (X or O)
2. Each cell can only be used once
3. Try to get three of your symbols in a row to win
4. **When the board fills up**, instead of a tie, the board shifts!

## The Shift Mechanic

When all 9 cells are filled with no winner, the board **automatically shifts** in one of four directions:

### Shift Directions (Cycling: Right → Left → Down → Up)

**Shift Right**: The board moves right, and the leftmost column disappears
```
Before:          After Shift Right:
X O X       →    _ X O
X O X       →    _ X O
O X O       →    _ O X
```

**Shift Left**: The board moves left, and the rightmost column disappears
```
Before:          After Shift Left:
X O X       →    O X _
X O X       →    O X _
O X O       →    X O _
```

**Shift Down**: The board moves down, and the top row disappears
```
Before:          After Shift Down:
X O X       →    _ _ _
X O X       →    X O X
O X O       →    X O X
```

**Shift Up**: The board moves up, and the bottom row disappears
```
Before:          After Shift Up:
X O X       →    X O X
X O X       →    O X O
O X O       →    _ _ _
```

## Winning

A player wins by getting three of their symbols in a row:
- **Horizontal**: Three symbols in a row (top, middle, or bottom)
- **Vertical**: Three symbols in a column (left, middle, or right)
- **Diagonal**: Three symbols in a diagonal line (corner to corner)

Winning can happen:
- On your normal turn (no shift)
- After the board shifts (if three in a row is created)

When a player wins:
- **Party popper celebration** (🎉) with confetti animation
- The winning player is announced with animated symbols
- The game display shows how many shifts occurred
- The game automatically restarts after 3 seconds

## No Draw/Tie

**There is no draw in this game!** Every time the board fills up:
1. The board shifts in one of four directions (cycling pattern)
2. Marks that were in the shifted-away row/column disappear
3. The game continues with the remaining pieces
4. Play continues until someone wins

This ensures the game always has a winner and never ends in a draw.

## Theme Switching

Click the **🌙 Mid-Autumn** button in the top right corner to switch themes:
- **Normal Theme**: Uses X and O symbols
- **Mid-Autumn Theme**: X becomes a 🥮 (moon cake) and O becomes a 🏮 (lantern)

The game mechanics remain exactly the same in both themes - only the visuals change.

## Game Statistics

The game tracks:
- **Shift Count**: How many times the board has shifted
- **Current Player**: Whose turn it is
- **Board State**: Visual representation of pieces and empty cells

This information helps you understand the game progression and strategy.
