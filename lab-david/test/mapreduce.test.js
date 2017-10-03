// 'use strict';

// const expect = require('expect');
// const mapReduce = require('../lib/mapreduce.js');

// describe('map and reduce testing', () => {

//     let myArray = [1,2,3,4,5];

//     it('should not have mutated myArray when calling map', () => {
//         let mutatedArray = mapReduce.map(myArray);
//         expect(myArray).toEqual([1,2,3,4,5]);
//     });


//     it('should not have mutated myArray when calling reduce', () => {
//         let mutatedArray = mapReduce.reduce(myArray);
//         expect(myArray).toEqual([1,2,3,4,5]);
//     });

//     it('map should return null because an array was not passed', () => {
//         expect(mapReduce.map('hello')).toEqual(null);
//     });

//     it('reduce should return null because an array was not passed', () => {
//         expect(mapReduce.reduce('hello')).toEqual(null);
//     });

//     it('should return [2,4,6,8,10] when calling map on myArray', () => {
//         expect(mapReduce.map(myArray)).toEqual([2,4,6,8,10]);
//     });

//     it('should return 30 when calling map on myArray', () => {
//         expect(mapReduce.reduce(myArray)).toEqual(15);
//     });    

// });