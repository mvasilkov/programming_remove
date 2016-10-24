'use strict'

function sum2(array, x) {
    const copy = array.slice()
    copy.sort((a, b) => a - b)

    let a = 0
    let b = copy.length - 1

    while (a < b) {
        const sum = copy[a] + copy[b]

        if (sum < x)
            ++a
        else if (sum > x)
            --b
        else
            return true
    }

    return false
}

function sum3(array, x) {
    const copy = array.slice()
    copy.sort((a, b) => a - b)

    for (let i = 0; i < copy.length - 2; ++i) {
        let a = i + 1
        let b = copy.length - 1

        while (a < b) {
            const sum = copy[i] + copy[a] + copy[b]

            if (sum < x)
                ++a
            else if (sum > x)
                --b
            else
                return true
        }
    }

    return false
}

function sum4(array, x) {
    const copy = array.slice()
    copy.sort((a, b) => a - b)

    const partial = new Map
    for (let i = 0; i < copy.length - 1; ++i) {
        for (let j = i + 1; j < copy.length; ++j) {
            partial.set(copy[i] + copy[j], new Set([i, j]))
        }
    }

    for (let i = 0; i < copy.length - 1; ++i) {
        for (let j = i + 1; j < copy.length; ++j) {
            const sum = copy[i] + copy[j]
            const p = partial.get(x - sum)

            if (p && !p.has(i) && !p.has(j))
                return true
        }
    }

    return false
}

if (require.main == module) {
    const assert = require('assert')
    const test = [5, 8, 29, 1, -4, 3]

    assert(sum2(test, 25) == true)
    assert(sum2(test, 32) == true)
    assert(sum2(test, 10) == false)

    assert(sum3(test, 30) == true)
    assert(sum3(test, 16) == true)
    assert(sum3(test, 24) == false)

    assert(sum4(test, 29) == true)
    assert(sum4(test, 12) == true)
    assert(sum4(test, 20) == false)

    console.log('It works.')
}
