'use strict'

const OPENING = new Set('({[')

const CLOSING = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
])

function balanced(a) {
    const parens = []

    for (let i = 0; i < a.length; ++i) {
        const c = a[i]

        if (CLOSING.has(c)) {
            if (parens.length == 0 || parens.pop() != CLOSING.get(c))
                return false
        }
        else if (OPENING.has(c)) {
            parens.push(c)
        }
    }

    return parens.length == 0
}

if (require.main == module) {
    const assert = require('assert')

    assert(balanced('({[]})') == true)
    assert(balanced('{[]()}') == true)
    assert(balanced('{[](}}') == false)
    assert(balanced('{[]([)}') == false)
    assert(balanced('{[](])}') == false)
    assert(balanced('{[]()}[') == false)

    console.log('It works.')
}
