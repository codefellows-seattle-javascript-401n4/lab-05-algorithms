'use strict';

module.exports = {
    // big0 runtime of o(n)
    map: function(arr) {
        if (!Array.isArray(arr)) return null;
        return arr.map(i => i * 2);
    },
    reduce: function(arr) {
        // big0 runtime of o(n)
        if (!Array.isArray(arr)) return null;
        return arr.reduce((prev, curr) => prev + curr, 0);
    }
}