'use strict'

function p(items, result) {
    if (items.length == 0) {
        console.log(result)
        return
    }

    items[0].forEach(function (it) {
        p(items.slice(1), result.concat([it]))
    })
}

if (require.main == module) {
    const ITEMS = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f', 'g', 'h'],
        ['i', 'j'],
    ]

    p(ITEMS, [])
}
