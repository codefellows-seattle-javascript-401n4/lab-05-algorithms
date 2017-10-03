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
    let expected = array.length;
    expect(expected).toEqual(1);
  });
});

describe('push', function(){
  it('should be able to handle multiple arguments given at once and give the correct length;', function(){
    let array = new List();
    array.push('a','b','c');
    let expected = array.length;
    expect(expected).toEqual(3);
  });
});

describe('push', function(){
  it('should store the arguments in order that they were given', function(){
    let array = new List();
    array.push('first', 'second', 'third');
    let expected = array[1];
    expect(expected).toBe('second');
  });
});
