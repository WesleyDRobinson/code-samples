'use strict'
// write a function that accepts `num`, a valid non-negative integer, and `parts`,
// a positive integer representing how many parts to evenly split `num`,
// and returns an array of these values

// example usage:
//      splitIntoInt(8, 4)  // [2,2,2,2]
//      splitIntoInt(10, 4) // [2,2,3,3]
//      splitIntoInt(20, 6) // [3,3,3,3,4,4]

module.exports = splitIntoInt

function splitIntoInt(num, parts) {
    let array = Array(parts).fill(Math.floor(num / parts))

    // get remainder and add it to the back of the array
    let remainder = num % parts
    while (remainder > 0) {
        array[array.length - remainder] += 1
        remainder -= 1
    }

    return array
}
