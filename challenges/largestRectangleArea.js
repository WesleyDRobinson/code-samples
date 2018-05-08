'use strict';

module.exports = {bruteForce}

function bruteForce(heights) {
    let ret = heights.reduce((acc, height, i, arr) => {
        let l = i - 1
        let r = i + 1
        let area = height

        // early exit; equivalent adjacent heights will have same area
        if (arr[r] === height) return acc

        while (l >= 0 && heights[l] >= height) {
            area += height
            l -= 1
        }
        while (r <= arr.length && heights[r] >= height) {
            area += height
            r += 1
        }

        acc.areas.push(area)
        if (area > acc.max) acc.max = area
        return acc
    }, {max: 0, areas: []})
    return ret.max
}

// also submitted to leetcode:
// https://leetcode.com/submissions/detail/150848097/

// More elegant solutions exist! Including an O(n) solution using Stack...
// http://www.informatik.uni-ulm.de/acm/Locals/2003/html/judge.html
// https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28933/Javascript-solution-with-some-explaination
// http://tech-queries.blogspot.com/2011/03/maximum-area-rectangle-in-histogram.html

// Still in progress and working to understand:
function stacksOn(heights) {
    let stack = []
    let max = 0
    let areas = []

    for (let i = 0; i <= heights.length; i += 1) {

        let height = (heights.length === i) ? -1 : heights[i]
        let last = stack[stack.length-1]

        while (stack.length !== 0 && height < heights[last]) {
            let idx = stack.pop()
            let h = heights[idx]
            let w = (0 === stack.length) ? i : i - last - 1
            let area = h * w
            areas.push(area)
            max = Math.max(max, area)
        }
        stack.push(i)
    }
    return areas
}
