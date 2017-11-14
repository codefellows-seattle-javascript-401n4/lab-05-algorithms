'use strict';

const expect = require('expect');
const List = require('../lib/arrayList.js');

describe('List Constructor Test', () => {
  it('Creates a new Array, with nothing in it', () => { 
    let array = new List();
    expect(array.length).toEqual(0);
  });
});

describe('Push Functionality - single', () => {
  it('Should simulate the push method on the array, increasing the size by [1]', () => {
    let array = new List();
    array.push('Josh');
    let actual = array.length;
    let expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe('Push Functionality - plural', () => {
  it('Should push multiple items in the array', () => {
    let array = new List();
    array.push('Josh','Dustin','Michael');
    let actual = array.length;
    let expected = 3;
    expect(actual).toEqual(expected);
  });
});

describe('Push Functionality - checking indexes', () => {
  it('Should return the appropriate value for the index', () => {
    let array = new List();
    array.push('first', 'second', 'third');
    let actual = array[1];
    let expected = 'second';
    expect(actual).toBe(expected);
  });
});

describe('Pop Functionality - single', () => {
  it('Should reduce the Array in size', () => {
    let array = new List();
    array.push('Josh', 'Michael');
    array.pop();
    let actual = array.length;
    let expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe('Pop Functionality - Checking Index', () => {
  it('Should list the remaining element in the Array', () => {
    let array = new List();
    array.push('Josh', 'Michael');
    let actual = array.pop();
    let expected = 'Michael';
    expect(actual).toBe(expected);
  });
});

describe('Pop Functionality - Checking Array Size', () => {
  it('Should delte the last item in the array and return the new size', () => {
    let array = new List();
    array.push('Josh', 'Michael', 'Amanda', 'Dustin');
    array.pop();
    let expected = {
      0: 'Josh',
      1: 'Michael',
      2: 'Amanda',
      length : 3,
    };
    expect(array).toEqual(expected);
  });
});

describe('forEach Functionality', () => {
  it('Should Iterate Appropriately', () => {
    let array = new List();
    let actual = 0;
    let expected = 3;
    array.push(1,1,1);
    array.forEach( i => actual+=i);
    expect(actual).toEqual(expected);
    expect(array.length).toEqual(3);
  });
});

describe('Filter Functionality - Test One', () => {
  it('Should filter Appropriately and return a new array', () => {
    let array = new List();
    let actual = array.filter(null);
    expect(actual instanceof List).toBe(true);
  });
});

describe('Filter Functionality - Test Two', () => {
  it('Should filter Appropriately and return a new array based on the callback', () => {
    let array = new List();
    array.push(1,2,3,4,5,6);
    let actual = array.filter(num => num % 2 ===0);
    let expected = {
      0: 2,
      1: 4,
      2: 6,
      length: 3,
    }
    expect(actual).toEqual(expected);
  });
});



describe('Map functionality', () => {
  it('Should change every indexed item based off of the Callback', () => {
    let array = new List();
    array.push(1,2,3);
    let actual = array.map(num => num * 2);
    let expected = {
      0: 2,
      1: 4,
      2: 6,
      length: 3,
    };
    expect(actual).toEqual(expected);
  });
});