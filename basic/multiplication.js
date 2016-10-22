'use strict'

function multiply(a, b) {
    a = a.split('').map(x => parseInt(x, 10)).reverse()
    b = b.split('').map(x => parseInt(x, 10)).reverse()

    const result = []

    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < b.length; ++j) {
            const k = i + j

            if (typeof result[k] == 'undefined')
                result[k] = 0
            if (typeof result[k + 1] == 'undefined')
                result[k + 1] = 0

            const x = a[i] * b[j] + result[k]
            result[k] = x % 10
            result[k + 1] += Math.floor(x / 10)
        }
    }

    while (result[result.length - 1] == 0)
        --result.length
    return result.reverse().join('') // .replace(/^0+/, '')
}

if (require.main == module) {
    const assert = require('assert')

    assert(multiply('2', '2') == '4')
    assert(multiply('10', '10') == '100')
    // 2^64 * 2^64
    assert(multiply('18446744073709551616', '18446744073709551616') ==
        '340282366920938463463374607431768211456')

    console.log('It works.')
}
