'use strict'

function ms(array) {
    let best = array[0]
    let start = 0
    let end = 1

    let localBest = best
    let localStart = start

    for (let i = 1; i < array.length; ++i) {
        const x = array[i]

        if (x > localBest + x) {
            localBest = x
            localStart = i
        }
        else {
            localBest += x
        }

        if (localBest > best) {
            best = localBest
            start = localStart
            end = i + 1
        }
    }

    return array.slice(start, end)
}

if (require.main == module) {
    const test = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

    console.log(ms(test)) // [4, -1, 2, 1]
}
