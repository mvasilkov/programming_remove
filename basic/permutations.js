'use strict'

function p(array, result, used) {
    if (typeof result == 'undefined')
        result = []

    if (typeof used == 'undefined')
        used = new Set

    if (result.length == array.length) {
        console.log(result)
        return
    }

    array.forEach(function (x, index) {
        if (used.has(index))
            return

        used.add(index)

        p(array, result.concat([x]), used)

        used.delete(index)
    })
}

p(['a', 'b', 'c', 'd'])
