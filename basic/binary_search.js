'use strict'

function bsearch(array, x) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        const p = Math.floor((left + right) * 0.5)

        if (array[p] < x)
            left = p + 1
        else if (array[p] > x)
            right = p - 1
        else
            return p
    }

    return -1
}

if (require.main == module) {
    const assert = require('assert')
    const array = [2, 4, 8, 16, 32, 64, 128, 256]

    assert(bsearch(array, 2) == 0)
    assert(bsearch(array, 8) == 2)
    assert(bsearch(array, 256) == 7)

    assert(bsearch(array, 1) == -1)
    assert(bsearch(array, 100) == -1)
    assert(bsearch(array, 1000) == -1)

    console.log('It works.')
}
