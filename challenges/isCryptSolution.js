'use strict'
module.exports = (crypt, solution) => {
    let nums = crypt.map(word =>
        word.split('').reduce((acc, letter) =>
            acc + solution.filter(pair =>
            letter === pair[0])[0][1], ''))
    // check that num does not contain any leading zeroes (but a single "0" is ok)
    if (nums.filter(num => num[1] && num[0] === '0').length) return false
    return parseInt(nums[2]) === parseInt(nums[0]) + parseInt(nums[1])
}

//A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.