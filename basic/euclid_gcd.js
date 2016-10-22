'use strict'
/* Euclid's algorithm for finding the greatest common divisor of two numbers.
 *
 * Compute the greatest common divisor of two nonnegative integers p and q as follows:
 * If q is 0, the answer is p.
 * If not, divide p by q and take the remainder r.
 * The answer is the greatest common divisor of q and r.
 */
function gcd(p, q) {
    if (q == 0)
        return p

    const r = p % q
    return gcd(q, r)
}

if (require.main == module) {
    const assert = require('assert')

    assert(gcd(48, 30) == 6)
    assert(gcd(23129, 29083) == 229)

    console.log('It works.')
}
