'use strict'

function LLItem(contents) {
    this.contents = contents
    this.next = null
}

LLItem.prototype.print = function () {
    const items = []

    for (let p = this; p != null; p = p.next) {
        items.push(p.contents)
    }

    console.log(items.join(' -> '))
}

LLItem.prototype.reverse = function (start) {
    let a = null
    let b = null

    for (let p = this; p != null; p = b) {
        b = p.next
        p.next = a
        a = p
    }

    return a
}

if (require.main == module) {
    let t
    let xs = t = new LLItem('a')
    t = t.next = new LLItem('b')
    t = t.next = new LLItem('c')
    t = t.next = new LLItem('d')

    xs.print()
    xs = xs.reverse()
    xs.print()
}
