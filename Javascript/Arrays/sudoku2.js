// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with
// numbers in such a way that each column, each row, and each of the nine 3 × 3
// sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
//
// Implement an algorithm that will check whether the given grid of numbers
// represents a valid Sudoku puzzle according to the layout rules described above.
// Note that the puzzle represented by grid does not have to be solvable.
//
// Example
//
// For
//
// grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
// the output should be
// sudoku2(grid) = true;
//
// For
//
// grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//         ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//         ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//         ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//         ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//         ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//         ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//         ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
// the output should be
// sudoku2(grid) = false.
//
// The given grid is not correct because there are two 1s in the second column.
// Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1
// through 9 one time.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.array.char grid
//
// A 9 × 9 array of characters, in which each character is either a digit from '1'
// to '9' or a period '.'.
//
// [output] boolean
//
// Return true if grid represents a valid Sudoku puzzle, otherwise return false.

function isNum(char) {
  if (char === '.') return false;
  return true;
};

function checkArray(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!isNum(arr[i])) continue;
    if (obj[arr[i]]) return false;
    obj[arr[i]] = true;
  }
  return true;
}

function check3by3(startingRow, startingColumn, grid) { // row and column of top left number
  let obj = {};
  for (let r = startingRow; r < startingRow + 3; r++) {
    for (let c = startingColumn; c < startingColumn + 3; c++) {
      if (!isNum(grid[r][c])) continue;
      if (obj[grid[r][c]]) return false;
      obj[grid[r][c]] = true;
    }
  }
  return true;
}

function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (!checkArray(grid[i])) return false;
    let horizontal = [];
    for (let j = 0; j < grid[i].length; j++) {
      horizontal.push(grid[j][i]);
    }
    if (!checkArray(horizontal)) return false;
  }

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!check3by3(r * 3, c * 3, grid)) return false;
    }
  }
  return true;
};
