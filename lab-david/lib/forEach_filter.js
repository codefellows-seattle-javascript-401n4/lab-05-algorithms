'use strict';

module.exports = {
    // big0 runtime of o(n)
    forEachArray: function(arr) {
        if (!Array.isArray(arr)) return null;
        let returnedArray = [];
        arr.forEach(i => returnedArray.push(i * 2));
        return returnedArray;
    },
    // big0 runtime of o(n)
    filterArray: function(arr) {  
        if (!Array.isArray(arr)) return null;
        return arr.filter(i => i > 4);
    }
}