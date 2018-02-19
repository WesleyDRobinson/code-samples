const assert = require('assert')

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

const splitIntoInt = require('./splitIntegerIntoParts')

assert.deepEqual(splitIntoInt(8, 4), [2, 2, 2, 2])
assert.deepEqual(splitIntoInt(10, 4), [2, 2, 3, 3])
assert.deepEqual(splitIntoInt(20, 6), [3, 3, 3, 3, 4, 4])
