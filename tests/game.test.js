/**
 * Tic-Tac-Toe Shift Game - Test Suite
 * Tests for board shift logic, win conditions, and game mechanics
 */

class GameLogic {
    constructor() {
        this.gameState = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.shiftCount = 0;
        this.winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    }

    checkWin() {
        for (let condition of this.winConditions) {
            const [a, b, c] = condition;
            if (this.gameState[a] &&
                this.gameState[a] === this.gameState[b] &&
                this.gameState[a] === this.gameState[c]) {
                return true;
            }
        }
        return false;
    }

    isBoardFull() {
        return this.gameState.every(cell => cell !== '');
    }

    shiftBoard(direction) {
        const newState = [...this.gameState];

        if (direction === 'right') {
            newState[2] = '';
            newState[5] = '';
            newState[8] = '';
            for (let i = 2; i > 0; i--) {
                newState[i] = newState[i - 1];
                newState[i + 3] = newState[i + 2];
                newState[i + 6] = newState[i + 5];
            }
            newState[0] = '';
            newState[3] = '';
            newState[6] = '';
        } else if (direction === 'left') {
            newState[0] = '';
            newState[3] = '';
            newState[6] = '';
            for (let i = 0; i < 2; i++) {
                newState[i] = newState[i + 1];
                newState[i + 3] = newState[i + 4];
                newState[i + 6] = newState[i + 7];
            }
            newState[2] = '';
            newState[5] = '';
            newState[8] = '';
        } else if (direction === 'down') {
            newState[6] = '';
            newState[7] = '';
            newState[8] = '';
            for (let i = 8; i >= 3; i--) {
                newState[i] = newState[i - 3];
            }
            newState[0] = '';
            newState[1] = '';
            newState[2] = '';
        } else if (direction === 'up') {
            newState[0] = '';
            newState[1] = '';
            newState[2] = '';
            for (let i = 0; i < 6; i++) {
                newState[i] = newState[i + 3];
            }
            newState[6] = '';
            newState[7] = '';
            newState[8] = '';
        }

        return newState;
    }

    placeMark(index, player) {
        if (this.gameState[index] === '') {
            this.gameState[index] = player;
            return true;
        }
        return false;
    }

    boardToString() {
        const board = this.gameState.map((cell, idx) => {
            if (idx % 3 === 2) return (cell || '_') + '\n';
            return (cell || '_') + ',';
        }).join('');
        return board;
    }

    setGameState(state) {
        this.gameState = [...state];
    }
}

// Test Suite
const tests = [];
let passedTests = 0;
let failedTests = 0;

function test(name, fn) {
    tests.push({ name, fn });
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function assertEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(message || `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    }
}

// ============ TEST CASES ============

test('Shift Right - Remove rightmost column', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    const shifted = game.shiftBoard('right');
    const expected = [
        '', 'X', 'O',
        '', 'X', 'O',
        '', 'O', 'X'
    ];

    assertEqual(shifted, expected, 'Shift right should move columns left and clear leftmost');
});

test('Shift Left - Remove leftmost column', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    const shifted = game.shiftBoard('left');
    const expected = [
        'O', 'X', '',
        'O', 'X', '',
        'X', 'O', ''
    ];

    assertEqual(shifted, expected, 'Shift left should move columns right and clear rightmost');
});

test('Shift Down - Remove top row', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    const shifted = game.shiftBoard('down');
    const expected = [
        '', '', '',
        'X', 'O', 'X',
        'X', 'O', 'X'
    ];

    assertEqual(shifted, expected, 'Shift down should move rows up and clear top row');
});

test('Shift Up - Remove bottom row', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    const shifted = game.shiftBoard('up');
    const expected = [
        'X', 'O', 'X',
        'O', 'X', 'O',
        '', '', ''
    ];

    assertEqual(shifted, expected, 'Shift up should move rows down and clear bottom row');
});

test('Win condition - Horizontal row', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'X', 'X',
        'O', 'O', '',
        '', '', ''
    ]);

    assert(game.checkWin() === true, 'Should detect horizontal win in top row');
});

test('Win condition - Vertical column', () => {
    const game = new GameLogic();
    game.setGameState([
        'O', 'X', '',
        'O', 'X', 'X',
        '', 'X', ''
    ]);

    assert(game.checkWin() === true, 'Should detect vertical win in middle column');
});

test('Win condition - Diagonal top-left to bottom-right', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', '',
        'O', 'X', 'O',
        '', '', 'X'
    ]);

    assert(game.checkWin() === true, 'Should detect diagonal win');
});

test('Win condition - Diagonal top-right to bottom-left', () => {
    const game = new GameLogic();
    game.setGameState([
        '', 'O', 'X',
        'O', 'X', 'O',
        'X', '', ''
    ]);

    assert(game.checkWin() === true, 'Should detect anti-diagonal win');
});

test('No win - incomplete row', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'X', '',
        'O', 'O', '',
        '', '', ''
    ]);

    assert(game.checkWin() === false, 'Should not detect win with incomplete row');
});

test('Board full detection', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    assert(game.isBoardFull() === true, 'Should detect full board');
});

test('Board not full detection', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', ''
    ]);

    assert(game.isBoardFull() === false, 'Should detect board with empty cell');
});

test('Win after shift - Right shift creates winning row', () => {
    const game = new GameLogic();
    // Before shift: X X . / . . . / . . .
    game.setGameState([
        'X', 'X', 'O',
        '', '', '',
        '', '', ''
    ]);

    const shifted = game.shiftBoard('right');
    game.setGameState(shifted);
    game.placeMark(2, 'X');  // Place X in the empty spot to complete row

    assert(game.checkWin() === true, 'Should create winning condition after shift and placement');
});

test('Place mark on empty cell', () => {
    const game = new GameLogic();
    const result = game.placeMark(4, 'X');

    assert(result === true, 'Should successfully place mark on empty cell');
    assert(game.gameState[4] === 'X', 'Mark should be at correct position');
});

test('Cannot place mark on occupied cell', () => {
    const game = new GameLogic();
    game.placeMark(4, 'X');
    const result = game.placeMark(4, 'O');

    assert(result === false, 'Should not place mark on occupied cell');
    assert(game.gameState[4] === 'X', 'Cell should still contain original mark');
});

test('Shift preserves valid marks', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'O', 'X', '',
        '', '', ''
    ]);

    const shifted = game.shiftBoard('left');
    // Leftmost column (X, O, _) is removed
    // Middle column becomes new left: (O, X, _)
    // Rightmost column becomes middle: (X, _, _)
    // New rightmost is empty: (_, _, _)
    const expected = [
        'O', 'X', '',
        'X', '', '',
        '', '', ''
    ];

    assertEqual(shifted, expected, 'Shift should preserve marks not in discarded column');
});

test('Multiple consecutive shifts', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
    ]);

    let state = [...game.gameState];

    // Shift right
    state = game.shiftBoard('right');
    assertEqual(state[0], '', 'After right shift, position 0 should be empty');

    game.setGameState(state);
    // Shift left
    state = game.shiftBoard('left');
    assertEqual(state[2], '', 'After left shift, position 2 should be empty');
});

test('Win impossible condition - No valid marks left after shifts', () => {
    const game = new GameLogic();
    game.setGameState([
        'X', 'X', 'O',
        '', '', '',
        '', '', ''
    ]);

    // Shift right to move X's left and create empty space
    let state = game.shiftBoard('right');
    assertEqual(state[0], '', 'Leftmost should be empty after right shift');
    assertEqual(state[1], 'X', 'Middle should have X');
    assertEqual(state[2], 'X', 'Rightmost should have X');
});

// ============ RUN TESTS ============

function runTests() {
    console.log('🧪 Tic-Tac-Toe Shift Game - Test Suite\n');
    console.log('=' .repeat(60));

    tests.forEach((test, index) => {
        try {
            test.fn();
            console.log(`✅ PASS: ${test.name}`);
            passedTests++;
        } catch (error) {
            console.log(`❌ FAIL: ${test.name}`);
            console.log(`   Error: ${error.message}\n`);
            failedTests++;
        }
    });

    console.log('=' .repeat(60));
    console.log(`\n📊 Results: ${passedTests} passed, ${failedTests} failed out of ${tests.length} tests\n`);

    if (failedTests === 0) {
        console.log('🎉 All tests passed!');
    }

    return {
        total: tests.length,
        passed: passedTests,
        failed: failedTests,
        success: failedTests === 0
    };
}

// Run tests
const results = runTests();
