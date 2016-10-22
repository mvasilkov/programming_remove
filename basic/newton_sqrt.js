'use strict'
/* Newton's method of successive approximations.
 *
 * Whenever we have a guess y for the value of the square root of a number x,
 * we can perform a simple manipulation to get a better guess
 * (one closer to the actual square root) by averaging y with x/y.
 */
function sqrt(x) {
    if (x < 0)
        return NaN

    const err = 1e-9
    let y = x
    while (Math.abs(y - x / y) > err) {
        y = (y + x / y) * 0.5
    }
    return y
}

if (require.main == module) {
    const assert = require('assert')

    assert(sqrt(1).toFixed(9) == '1.000000000')
    assert(sqrt(4).toFixed(9) == '2.000000000')
    assert(sqrt(16384).toFixed(9) == '128.000000000')

    console.log('It works.')
}
