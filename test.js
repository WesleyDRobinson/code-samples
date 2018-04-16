'use strict'
const assert = require('assert')

// 16 April 2018 -- interview with Samsara

const {SetCard, SetGame} = require('./gameOfSet')

const card = new SetCard('prop1', 'attr2', 5)
let expected = '{"shape":"prop1","shading":"attr2","count":5}'
let actual = card.toString()
assert.equal(actual, expected, 'should create a Set Card')

const setGame = new SetGame()
const cardsToDeal = Math.floor(Math.random() * 27)

setGame.dealCard(cardsToDeal)
assert.equal(setGame.table.length, cardsToDeal)
assert.equal(setGame.deck.length, 27 - cardsToDeal)

// 14-15 Feb 2018 -- codewars

const biggestTriangleInt = require('./largestTriangleFromPointsInSphere')

const pointsList = [[1, 2, -4], [-3, 2, 4], [7, 8, -4], [2, 3, 5], [-2, -1, 1], [3, 2, 6], [1, 4, 0], [-4, -5, -6], [4, 5, 6], [-2, -3, -5], [-1, -2, 4], [-3, -2, -6], [-1, -4, 0], [2, 1, -1]]
    , sphereCenter = [0, 0, 0]
    , radius = 8
const triangleTest = [
    165,
    33.6452076825214,
    [
        [[1, 2, -4], [3, 2, 6], [-1, -4, 0]],
        [[1, 4, 0], [-1, -2, 4], [-3, -2, -6]]
    ]
]
const triangleValue = biggestTriangleInt(pointsList, sphereCenter, radius)
assert.equal(triangleValue[0], triangleTest[0], 'triangle tally does not match')
assert.equal(triangleValue[1], triangleTest[1], 'largest triangle Area is not matching')
assert.deepEqual(triangleValue[2], triangleTest[2], 'largest triangle coordinates do not match')

// codefights -- February 2018

const splitIntoInt = require('./splitIntegerIntoParts')

assert.deepEqual(splitIntoInt(8, 4), [2, 2, 2, 2])
assert.deepEqual(splitIntoInt(10, 4), [2, 2, 3, 3])
assert.deepEqual(splitIntoInt(20, 6), [3, 3, 3, 3, 4, 4])

// codewars -- feb

const solvableSudoku = require('./sudokuChecker')
const gridTrue = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."]
]

const gridFalse = [
    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", "3", ".", ".", "2", ".", "4", ".", "."],
    [".", ".", "7", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", "4", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "."],
    [".", ".", ".", ".", ".", "5", "2", ".", "."]
]

assert.equal(solvableSudoku(gridTrue), true)
assert.equal(solvableSudoku(gridFalse), false)

// winter 2018 -- codewars
const isCryptSolution = require('./isCryptSolution')

let crypt = ["SEND", "MORE", "MONEY"]
let solution = [["O", "0"], ["M", "1"], ["Y", "2"], ["E", "5"], ["N", "6"], ["D", "7"], ["R", "8"], ["S", "9"]]
assert.equal(isCryptSolution(crypt, solution), true)
crypt = ["TEN", "TWO", "ONE"]
solution = [["O", "1"], ["T", "0"], ["W", "9"], ["E", "5"], ["N", "4"]]
assert.equal(isCryptSolution(crypt, solution), false)
crypt = ["A", "A", "A"]
solution = [["A", "0"]]
assert.equal(isCryptSolution(crypt, solution), true)
