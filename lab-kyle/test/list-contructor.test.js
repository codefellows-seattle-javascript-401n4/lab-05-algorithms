'use strict';

const expect = require('expect');
const List = require('../lib/list-constructor');

describe('List prototypes', function() {

  it('should start at a length of 0', function(){
    let array = new List();
    expect(array.length).toEqual(0);
  });

  it('should PUSH to the list twice', function() {
    let array = new List();
    array.push(1);
    array.push(2);
    expect(array.length).toEqual(2);
  });

  it('should MAP the  callback function to everything', function(){
    let array = new List();
    array.push(1);
    array.push(1);

    let arrayTwo = array.map((num) => num + 1);

    expect(arrayTwo[0]).toEqual(2);
    expect(arrayTwo[1]).toEqual(2);

  });

  it('should POP off the last item', function(){
    let array = new List();
    array.push(1);
    array.push(2);
    array.pop();
    expect(array.length).toEqual(1);
  });

  it('should NOT be able to POP', function(){
    let array = new List();
    expect(array.pop()).toBe('nothing to pop');
  });

  it('FOR EACH should work like map but without new array', function(){
    let array = new List();
    array.push(2);
    array.push(2);
    array.forEach((num) => num + 1);
    expect(array[0]).toEqual(3);
    expect(array[1]).toEqual(3);
  });

  it('should FILTER correctly based on callback', function(){
    let array = new List();
    array.push(1);
    array.push(2);
    array.push(3);

    let newArray = array.filter((num) => num === 1);

    expect(newArray.length).toEqual(1);
  });

  it('should REDUCE array to one value', function(){
    let array = new List();
    array.push(1);
    array.push(2);
    array.push(3);

    let newArray = array.reduce((num) => {
      return num + num;
    });
    expect(newArray).toEqual(6);
  });

});
