'use strict'

// from codefights:
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle.
// Note that the puzzle represented by grid does not have to be solvable.

// tasks:
// - [x] a function that checks rows for dupes
// - [x] a function that transposes the matrix
// - [x] a function that checks a 3x3 grid for dupes
// - [x] a function that loops through all 3x3 grids

// accepts 9x9 grid of integers (empty cells == '.') and returns a boolean indicating whether the grid is a valid Sudoku puzzle
module.exports = grid => {
    // check all 9 3x3 square
    function checkAllBoxes (grid) {
        // rows
        for (let rowStart = 0; rowStart < grid.length; rowStart += 3) {
            // columns
            for (let colStart = 0; colStart < grid.length; colStart += 3) {
                if (!checkOneBox(grid, rowStart, colStart, 3)) return false
            }
        }
        return true
    }

    // inspect a square for dupes
    function checkOneBox(grid, rowStart, colStart, squareLen) {
        let check = ''
        // rows
        for(let i = rowStart; i < rowStart + squareLen; i += 1){
            // columns
            for (let j = colStart; j < colStart + squareLen; j += 1) {
                let curr = grid[i][j]
                if (curr !== '.') {
                    if (check.includes(curr)) return false
                    else  check += curr
                }
            }
        }
        return true
    }

    // inspect a row for dupes
    function checkRowsForDupes(grid) {
        let ret = true
        grid.forEach((row) => {
            row.forEach((n, i) => {
                if (n !== '.' && row.includes(n, i + 1)) ret = false
            })
        })
        return ret
    }

    // transpose the grid (columns become rows): https://en.wikipedia.org/wiki/Transpose
    function transpose (grid) {
        return grid[0].map((col, i) => grid.map(row => row[i]))
    }

    // returns a boolean
    const transposedGrid = transpose(grid)
    return checkRowsForDupes(grid) && checkRowsForDupes(transposedGrid) && checkAllBoxes(grid)
}
