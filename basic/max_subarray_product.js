'use strict'

function msp(array) {
    const best = { val: array[0], start: 0, end: 1 }
    let min = { val: array[0], start: 0 }
    let max = { val: array[0], start: 0 }

    for (let i = 1; i < array.length; ++i) {
        const x = array[i]

        if (x < 0) {
            const t = min
            min = max
            max = t
        }

        if (x > max.val * x) {
            max.val = x
            max.start = i
        }
        else {
            max.val *= x
        }

        if (x < min.val * x) {
            min.val = x
            min.start = i
        }
        else {
            min.val *= x
        }

        if (max.val > best.val) {
            best.val = max.val
            best.start = max.start
            best.end = i + 1
        }
    }

    return array.slice(best.start, best.end)
}

if (require.main == module) {
    const test = [2, 1, -3, 4, -1, 2, 1, -5, 4]

    console.log(msp(test))
}
