# Lab 05

For map and reduce, simply enter an array as a function arguement and it will return a new array with the mutated data. 

For example:

`
map: function([1,2,3,4,5]) {
        if (!Array.isArray(arr)) return null;
        return arr.map(i => i * 2);
}
`

will return a new array of [2,4,6,8,10] and the inputted array will remain the same.

Tests have been setup to check that the functions DO NOT change the array passed into the function. They should return new ones and the old array should be untouched. 

We also check to make sure an array is passed into the function, and if not it returns null.