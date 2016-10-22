'use strict'

function Accumulator() {
    this.n = 0
    this.mean = 0
}

Accumulator.prototype.push = function (x) {
    ++this.n
    this.mean += (x - this.mean) / this.n
}

if (require.main == module) {
    const assert = require('assert')

    const a = new Accumulator
    a.push(3)
    a.push(9)
    assert(a.mean == 6)
    a.push(12)
    assert(a.mean == 8)
    a.push(0)
    a.push(1)
    assert(a.mean == 5)

    console.log('It works.')
}
