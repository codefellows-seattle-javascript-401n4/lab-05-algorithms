'use strict';

const expect = require('expect');
const List = require('./../lib/array.js');

describe('List constructor', function(){
  it('should create a new and empty "array" object with a length of 0', function(){ 
    let array = new List();
    expect(array.length).toEqual(0);
  });
});

describe('.push', function(){
  it('should increment the length of the array by 1 when given one argument', function(){
    let array = new List();
    array.push('poop');
    let actual = array.length;
    let expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe('push', function(){
  it('should be able to handle multiple arguments given at once and give the correct length;', function(){
    let array = new List();
    array.push('a','b','c');
    let actual = array.length;
    let expected = 3;
    expect(actual).toEqual(expected);
  });
});

describe('push', function(){
  it('should store the arguments in order that they were given', function(){
    let array = new List();
    array.push('first', 'second', 'third');
    let actual = array[1];
    let expected = 'second';
    expect(actual).toBe(expected);
  });
});

describe('pop', function(){
  it('should decrease the length of the array by 1', function(){
    let array = new List();
    array.push('poop', 'poopy');
    array.pop();
    let actual = array.length;
    let expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe('pop', function(){
  it('should return the last array item that was deleted', function(){
    let array = new List();
    array.push('poop', 'poopy');
    let actual = array.pop();
    let expected = 'poopy';
    expect(actual).toBe(expected);
  });
});

describe('pop', function(){
  it('should delete the last item in the array', function(){
    let array = new List();
    array.push(0,1,2,3);
    array.pop();
    let expected = {
      0: 0,
      1: 1,
      2:2,
      length : 3,
    };
    expect(array).toEqual(expected);
  });
});

describe('forEach', function(){
  it('should run the callback once for every item in the array and not change the amount of items in the array', function(){
    let array = new List();
    let actual = 0;
    let expected = 3;
    array.push(1,1,1);
    array.forEach( i => actual+=i);
    expect(actual).toEqual(expected);
    expect(array.length).toEqual(3);
  });
});

describe('filter', function(){
  it('should return a new array', function(){
    let array = new List();
    let actual = array.filter(null);
    expect(actual instanceof List).toBe(true);
  });
});

describe('filter', function(){
  it('should return a new filtered array based on the callback', function(){
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