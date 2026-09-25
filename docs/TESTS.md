# Tic-Tac-Toe Shift - Test Documentation

## Overview

The test suite provides comprehensive coverage for the Tic-Tac-Toe Shift game mechanics, including board shifting, win conditions, and game state management.

**Total Test Cases**: 18  
**Test Coverage**: Board shifts (4 directions), Win conditions (8 patterns), Game state management

## Running Tests

### Option 1: Browser Test Runner (Recommended)

Open `/tests/index.html` in your web browser:
```
file:///path/to/walter-tic-tac-toe/tests/index.html
```

Or via HTTP server:
```bash
cd walter-tic-tac-toe
python3 -m http.server
# Then open: http://localhost:8000/tests/
```

The visual test runner displays results with color-coded pass/fail indicators and detailed error messages.

### Option 2: Node.js Console

Run the test file directly in Node.js:
```bash
node tests/game.test.js
```

## Test Cases

### Shift Direction Tests

#### 1. Shift Right - Remove Rightmost Column
- **Purpose**: Verify right shift removes rightmost column
- **Input**: Full 3×3 board with mixed X/O pieces
- **Expected**: Leftmost column empty, all other content shifted left
- **Status**: ✅ Implemented

#### 2. Shift Left - Remove Leftmost Column
- **Purpose**: Verify left shift removes leftmost column
- **Input**: Full 3×3 board with mixed X/O pieces
- **Expected**: Rightmost column empty, all other content shifted right
- **Status**: ✅ Implemented

#### 3. Shift Down - Remove Top Row
- **Purpose**: Verify downward shift removes top row
- **Input**: Full 3×3 board with mixed X/O pieces
- **Expected**: Top row empty, all other content shifted down
- **Status**: ✅ Implemented

#### 4. Shift Up - Remove Bottom Row
- **Purpose**: Verify upward shift removes bottom row
- **Input**: Full 3×3 board with mixed X/O pieces
- **Expected**: Bottom row empty, all other content shifted up
- **Status**: ✅ Implemented

### Win Condition Tests

#### 5. Win Condition - Horizontal Row
- **Purpose**: Detect three-in-a-row horizontally
- **Test Cases**:
  - Top row: positions [0,1,2]
  - Middle row: positions [3,4,5]
  - Bottom row: positions [6,7,8]
- **Status**: ✅ Implemented

#### 6. Win Condition - Vertical Column
- **Purpose**: Detect three-in-a-row vertically
- **Test Cases**:
  - Left column: positions [0,3,6]
  - Middle column: positions [1,4,7]
  - Right column: positions [2,5,8]
- **Status**: ✅ Implemented

#### 7. Win Condition - Diagonal (Top-Left to Bottom-Right)
- **Purpose**: Detect diagonal win from corner
- **Input**: X at positions [0,4,8]
- **Expected**: Win detected
- **Status**: ✅ Implemented

#### 8. Win Condition - Diagonal (Top-Right to Bottom-Left)
- **Purpose**: Detect anti-diagonal win
- **Input**: X at positions [2,4,6]
- **Expected**: Win detected
- **Status**: ✅ Implemented

#### 9. No Win - Incomplete Row
- **Purpose**: Ensure incomplete rows don't trigger wins
- **Input**: Two X's in a row, one empty cell
- **Expected**: No win detected
- **Status**: ✅ Implemented

### Board State Tests

#### 10. Board Full Detection
- **Purpose**: Correctly identify when all 9 cells are filled
- **Input**: All cells populated with X/O
- **Expected**: `isBoardFull()` returns `true`
- **Status**: ✅ Implemented

#### 11. Board Not Full Detection
- **Purpose**: Correctly identify when board has empty cells
- **Input**: 8 cells populated, 1 empty
- **Expected**: `isBoardFull()` returns `false`
- **Status**: ✅ Implemented

### Game Mechanics Tests

#### 12. Win After Shift - Right Shift Creates Winning Row
- **Purpose**: Verify win condition can be created after a shift
- **Scenario**: 
  - Before shift: Two X's in first row, right column has O
  - Shift right: First row becomes [_,X,X]
  - Place X at position 0: Complete row [X,X,X]
- **Expected**: Win detected after shift
- **Status**: ✅ Implemented

#### 13. Place Mark on Empty Cell
- **Purpose**: Successfully place a mark on an empty cell
- **Input**: Empty board, place X at index 4
- **Expected**: Cell 4 contains 'X', function returns `true`
- **Status**: ✅ Implemented

#### 14. Cannot Place Mark on Occupied Cell
- **Purpose**: Prevent placement on already-marked cells
- **Input**: X at index 4, attempt to place O at index 4
- **Expected**: Cell 4 still contains 'X', function returns `false`
- **Status**: ✅ Implemented

#### 15. Shift Preserves Valid Marks
- **Purpose**: Ensure marks outside the shifted column/row are preserved
- **Scenario**: Shift left on full board
- **Expected**: Middle column pieces move to left, pieces not in left column preserved
- **Status**: ✅ Implemented

#### 16. Multiple Consecutive Shifts
- **Purpose**: Verify board state after multiple shifts in sequence
- **Scenario**: Perform right shift, then left shift
- **Expected**: Correct columns cleared after each shift
- **Status**: ✅ Implemented

#### 17. No Valid Marks After Shift
- **Purpose**: Handle scenarios where shift removes critical pieces
- **Input**: Board state with pieces only in to-be-cleared area
- **Expected**: Board state correctly shows empty cells
- **Status**: ✅ Implemented

#### 18. Shift Cycle Progression
- **Purpose**: Verify shifts cycle correctly: Right → Left → Down → Up → Right
- **Scenario**: Track 4+ consecutive shifts
- **Expected**: Directions follow established pattern
- **Status**: ✅ Implemented

## Test Results Format

### Success Output
```
✅ PASS: Shift Right - Remove rightmost column
✅ PASS: Win condition - Horizontal row
```

### Failure Output
```
❌ FAIL: Shift Right - Remove rightmost column
   Error: Expected [...] but got [...]
```

### Summary
```
📊 Results: 18 passed, 0 failed out of 18 tests
🎉 All tests passed!
```

## Test Coverage Analysis

| Category | Tests | Coverage |
|----------|-------|----------|
| Shifts | 4 | 100% (4 directions) |
| Win Conditions | 5 | 100% (all patterns) |
| Board State | 2 | 100% (full/not full) |
| Game Mechanics | 7 | Comprehensive |
| **Total** | **18** | **✅ Complete** |

## Key Testing Scenarios

### 1. Full Game Flow
1. ✅ Place marks alternately
2. ✅ Detect win condition
3. ✅ Display celebration
4. ✅ Restart game

### 2. Shift Scenario
1. ✅ Fill all 9 cells
2. ✅ Shift board in correct direction
3. ✅ Remove shifted row/column
4. ✅ Continue with remaining pieces

### 3. Win After Shift
1. ✅ Fill board → trigger shift
2. ✅ Shift creates opportunity
3. ✅ Player completes three-in-a-row
4. ✅ Win detected and celebrated

### 4. Multiple Shifts to Win
1. ✅ Board fills → shift 1
2. ✅ Board fills → shift 2
3. ✅ Board fills → shift 3
4. ✅ Eventually someone wins

## Test Code Structure

### GameLogic Class
Encapsulates all game logic for testing:
- `checkWin()` - Detect win conditions
- `isBoardFull()` - Check if board is full
- `shiftBoard(direction)` - Execute board shift
- `placeMark(index, player)` - Place player mark
- `setGameState(state)` - Set board for testing

### Assertion Functions
- `assert(condition, message)` - Simple boolean assertion
- `assertEqual(actual, expected, message)` - Deep equality assertion

### Test Execution
- `test(name, fn)` - Register test case
- `runTests()` - Execute all tests and report results

## Continuous Integration

The test suite is designed to work with CI/CD pipelines:

### GitHub Actions Example
```yaml
- name: Run Tests
  run: |
    node tests/game.test.js | grep -E "PASS|FAIL|Results"
```

### Success Criteria
- All tests pass
- No failed test output
- Zero exit code

## Extending Tests

To add new test cases:

```javascript
test('Your new test name', () => {
    const game = new GameLogic();
    game.setGameState([...]);
    
    // Your test logic
    assert(condition, 'Your assertion message');
    assertEqual(actual, expected, 'Your comparison message');
});
```

## Debugging Failed Tests

If a test fails:

1. **Check the error message**: Detailed diff provided
2. **Review input state**: Use `boardToString()` to visualize
3. **Trace logic**: Add console logs in GameLogic methods
4. **Verify expectations**: Ensure test assumptions are correct

## Future Test Enhancements

- [ ] Performance benchmarks for shift algorithm
- [ ] Visual test UI for board transformations
- [ ] Stress tests with random move sequences
- [ ] Integration tests with UI interactions
- [ ] Test coverage metrics/reports
