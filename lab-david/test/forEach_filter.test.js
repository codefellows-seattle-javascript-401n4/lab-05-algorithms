'use strict';

const expect = require('expect');
const forEachFilter = require('../lib/forEach_filter.js');

const myArray = [1,2,3,4,5];

describe('Testing for Each and Filter Pure functions', () => {
    let expectedMyArrayFilter = forEachFilter.filterArray(myArray);
    it('myArray should remain [1,2,3,4,5] when call function on it', () => {
    
        expect(myArray).toEqual([1,2,3,4,5]);
    });

    it('the new expectedArray should be [5]', () => {
        expect(expectedMyArrayFilter).toEqual([5]);
    });

    it('not inputting an array should return null', () => {
        expect(forEachFilter.filterArray('wizards')).toEqual(null);
    });

    let expectedArrayEach = forEachFilter.forEachArray(myArray);
    
    it('myArray should remain [1,2,3,4,5] when call function on it', () => {
        expect(myArray).toEqual([1,2,3,4,5]);
    });


    it('the new expectedArrayEach should be [2,4,6,8,10]', () => {
        expect(expectedArrayEach).toEqual([2,4,6,8,10]);
    });

    it('not inputting an array should return null', () => {
        expect(forEachFilter.forEachArray('wizards')).toEqual(null);
    });
});