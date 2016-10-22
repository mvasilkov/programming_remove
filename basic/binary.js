'use strict'

function bin(x) {
    const result = []

    while (x != 0) {
        result.unshift(x % 2)
        x = Math.floor(x * 0.5)
    }

    return result.join('')
}

function parseBin(a) {
    let result = 0
    let n = 1

    for (let i = a.length - 1; i >= 0; --i) {
        if (a[i] == '1') {
            result += n
        }
        n *= 2
    }

    return result
}

if (require.main == module) {
    const assert = require('assert')

    assert(bin(255) == '11111111')
    assert(bin(256) == '100000000')
    assert(bin(40000) == '1001110001000000')

    assert(parseBin('11111111') == 255)
    assert(parseBin('100000000') == 256)
    assert(parseBin('1001110001000000') == 40000)

    console.log('It works.')
}
