# Tic-Tac-Toe Game

A simple, elegant two-player tic-tac-toe game with theme switching and celebration animations. Built with vanilla HTML, CSS, and JavaScript.

## 🎮 Play Online

[**Play the game directly in your browser**](https://walter-lai-idnerd.github.io/walter-tic-tac-toe)

## Features

✨ **Two-player gameplay** - X goes first, players alternate turns  
🎨 **Theme switching** - Normal mode (X/O) or Mid-Autumn Festival theme (🧧/🏮)  
🎉 **Celebration animations** - Confetti and animated celebration on win or tie  
⚡ **Zero build required** - Pure HTML, CSS, and JavaScript  
📱 **Responsive** - Works on desktop and mobile  

## How to Play

1. Click an empty cell to place your symbol (X goes first)
2. Win by getting three symbols in a row (horizontal, vertical, or diagonal)
3. If the board fills with no winner, it's a tie
4. Game automatically restarts after 3 seconds

Click the **🌙 Mid-Autumn** button to switch themes!

## Running Locally

### Option 1: Using Python's HTTP Server (Recommended)

```bash
cd walter-tic-tac-toe
python3 -m http.server
```

Then open your browser and navigate to `http://localhost:8000`

### Option 2: Direct File Access

Simply open `index.html` in your web browser.

## Documentation

- **[Game Rules](./docs/RULES.md)** - Detailed rules and gameplay
- **[Design Document](./docs/DESIGN.md)** - Project brief and design decisions

## File Structure

```
walter-tic-tac-toe/
├── index.html              Main game file with CSS and JavaScript
├── docs/
│   ├── index.html          Game file for GitHub Pages
│   ├── README.md           Documentation landing page
│   ├── RULES.md            Game rules for players
│   └── DESIGN.md           Design document with project brief
├── transcript/
│   └── session_2026-09-25.json  Session transcript
└── README.md               This file
```

## Repository

- **GitHub**: [walter-tic-tac-toe](https://github.com/walter-lai-idnerd/walter-tic-tac-toe)
- **GitHub Pages**: [Play Online](https://walter-lai-idnerd.github.io/walter-tic-tac-toe)

Enjoy the game! 🎮
