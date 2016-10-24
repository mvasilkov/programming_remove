'use strict'

function lps(input) {
    function finder(a, b) {
        if (input[a] != input[b])
            return { size: 0 }

        while (a > 0 && b < input.length - 1 && input[a - 1] == input[b + 1]) {
            --a
            ++b
        }

        return { a, b, size: b - a + 1 }
    }

    let result = finder(0, 1)

    for (let i = 1; i < input.length - 1; ++i) {
        const p1 = finder(i - 1, i + 1)
        const p2 = finder(i, i + 1)
        const p = p2.size > p1.size ? p2 : p1

        if (p.size > result.size)
            result = p
    }

    return input.substr(result.a, result.size)
}

if (require.main == module) {
    const assert = require('assert')

    assert(lps('ab') == '')
    assert(lps('abab') == 'aba')
    assert(lps('aabb') == 'aa')
    assert(lps('bananas') == 'anana')
    assert(lps('sabbath') == 'abba')

    console.log('It works.')
}
