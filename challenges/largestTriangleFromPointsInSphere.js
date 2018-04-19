'use strict'
// completed 14-15 Feb 2018, San Francisco, California
// source: https://www.codewars.com/kata/helpers-for-a-3dgame-i-biggest-triangle-in-a-sphere

// Challenge:
// We have an sphere with center O, having in the space the coordinates `[α, β, γ]` and radius `r` and a list of points, `points_list`, each one with coordinates `[x, y, z]`. Select the biggest triangle (or triangles) that has (have) all its (their) 3 vertice(s) as interior points of the sphere (not even in the sphere contour). You should consider that a point `P` is interior if its distance to center O, `d`, is such that:
//  `d < r` and `(d - r) / r| > 10-10`

// Summary:
// write a function that accepts 3 parameters: a list of points (array of xyz coordinates), a sphere's center (xyz coordinates), and sphere radius in unspecified units
// and returns an array of 1) the number of triangles that may be drawn within the sphere, 2) the Area of the largest triangle(s), 3) the coordinates of that (those) triangle(s) in the order presented.

// Example:
// const pointsList = [[1, 2, -4], [-3, 2, 4], [7, 8, -4], [2, 3, 5], [-2, -1, 1], [3, 2, 6], [1, 4, 0], [-4, -5, -6], [4, 5, 6], [-2, -3, -5], [-1, -2, 4], [-3, -2, -6], [-1, -4, 0], [2, 1, -1]]
//     , sphereCenter = [0, 0, 0]
//     , radius = 8
// biggestTriangInt(pointsList, sphereCenter, radius) == [165, 33.645207682521445, [[[1, 2, -4], [3, 2, 6], [-1, -4, 0]], [[1, 4, 0], [-1, -2, 4], [-3, -2, -6]]]]

// Main Method:
module.exports = biggestTriangInt

function biggestTriangInt(pointsList, center, radius) {
    // find all the points within the sphere
    let validPoints = pointsList.filter(point => inSphere(point, center, radius))
    // get the tally and area of all triangles that can be drawn between the points
    let triangles = getTriangles(validPoints)
    // find the largest triangle
    let largest = Object.keys(triangles).reduce((largest, next) => parseFloat(next) > largest ? parseFloat(next) : largest, 0)

    return largest ? [triangles.tally, largest, triangles[largest]] : []
}

// Helper methods:

// Find the distance between two points in 3D space
// distance = √ ((x2 - x1)² + (y2 - y1)² + (z2 - z1)²)
function calcDistance(P1, P2) {
    return Math.sqrt(
        Math.pow(P1[0] - P2[0], 2)
        + Math.pow(P1[1] - P2[1], 2)
        + Math.pow(P1[2] - P2[2], 2))
}

// test if point is withing sphere
function inSphere(point, circleCenter, radius) {
    let dist = calcDistance(point, circleCenter)
    return dist < radius
}

// given an array of x,y,z coordinates, return on object whose keys are
// the area of possible triangles with values being the triangle's points in XYZ coordinates
// + a tally of triangles
function getTriangles(points) {

    let triangles = {tally: 0}

    // gather the sets of 3 points (nesting 3 levels)
    for (let i = 0; i < points.length; i += 1) {
        let one = points[i]

        for (let j = i + 1; j < points.length; j += 1) {
            let two = points[j]

            for (let k = j + 1; k < points.length; k += 1) {
                let three = points[k]

                // tally triangle
                triangles.tally += 1

                // find the length of each side, a b c
                let a = calcDistance(one, two)
                let b = calcDistance(two, three)
                let c = calcDistance(three, one)
                // s = semi-perimeter
                let s = (a + b + c) / 2

                // calculate triangle Area using Heron's formula (https://en.wikipedia.org/wiki/Heron's_formula):
                let A = Math.sqrt(s * (s - a) * (s - b) * (s - c))

                // fixed decimal required to achieve this implementation due to JS Math
                let key = A.toFixed(13)

                // if duplicate triangle, create array for them
                if (Array.isArray(triangles[key])) {
                    triangles[key] = [[...triangles[key]], [one, two, three]]
                } else {
                    triangles[key] = [one, two, three]
                }

            }
        }
    }
    return triangles
}
