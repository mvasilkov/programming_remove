'use strict'

const IGNORE = new Set(', ')

function isPalindrome(a) {
    let i = 0
    let j = a.length - 1

    while (i < j) {
        if (a[i] != a[j])
            return false

        for (++i; IGNORE.has(a[i]) && i < j; ++i)
            ; // nop
        for (--j; IGNORE.has(a[j]) && j > i; --j)
            ; // nop
    }

    return true
}

if (require.main == module) {
    const assert = require('assert')

    assert(isPalindrome('race car') == true)
    assert(isPalindrome('in girum imus nocte et consumimur igni') == true)
    assert(isPalindrome('never odd or even') == true)
    assert(isPalindrome('rise to vote, sir') == true)

    assert(isPalindrome('abab') == false)

    console.log('It works.')
}
