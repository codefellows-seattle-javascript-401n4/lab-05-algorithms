'use strict';

const expect = require('expect');
const List = require('../lib/app.js');
var testArray = new List();

let tests = [
  {
    description: 'List function',
    should: 'create an array',
    expected: 1,
    testCode: function () {
      let testArray = new List();
    },
    actual: testArray.length,
  },
  {
    description: '.push',
    should: 'increment array length by 1.',
    expected: 2,
    actual: testArray.length,
    testCode: ()=>  {
      let testArray = new List();
      testArray.pusher(0);
    },
  },
  {
    description: '.push',
    should: 'make an array with array length equal to it\'s passed arguments.',
    expected: 3,
    actual: testArray.length,
    testCode: ()=>  {
      let testArray = new List();
      testArray.pusher('boil', 'toil', 'trouble')
    }
  },
  {
    description: '.push',
    should: 'array\'s arguments are in the right order.',
    expected: 'doom',
    actual: testArray[3],
    testCode: ()=> {
      let testArray = new List();
      testArray.pusher('lizards', 'gizzards', 'frogs', 'doom')
    }
  },
  {
    description: '.pop',
    should: 'decrease array length by one.',
    expected: 3,
    actual: testArray.length,
    testCode: ()=>{
      let testArray = new List();
      testArray.pusher('bog', 'blood', 'ocean', 'potion');
      testArray.popper();
    }
  },
  {
    description: '.pop',
    should: 'return the highest index of the array.',
    expected: 'potion',
    testCode: ()=>{
      let testArray = new List();
      testArray.pusher('bog', 'blood', 'ocean', 'potion');
      testArray.popper();
    },
    actual: testArray.popper(),
  },
  {
    description: '.pop',
    should: 'removes the last index from the array.',
    expected: ['bog', 'blood', 'ocean'],
    actual: testArray,
    testCode: ()=>{
      let testArray = new List();
      testArray.pusher('bog', 'blood', 'ocean', 'potion'),
      testArray.popper();
    }
  },
]

function mochaTest (test){
  describe(test.description, function(){
    it(test.should, function(){
      test.testCode();
      expect(test.expected).toEqual(test.actual);
    });
  });
}

tests.forEach(mochaTest);
