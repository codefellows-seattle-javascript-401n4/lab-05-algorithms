'use strict';

const expect = require('expect');

const List = require('../index');

describe('List.push', function() {

  it ('should push the new item "roses" into the array. The new array should contain roses', () => {
    let newList = new List(); //create an instance of List
    newList.push('roses');
    expect(newList.values).toContain('roses');
  });
});

describe('List.pop', function() {
  it ('should remove the last item from the array', () => {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    console.log(`before popping, newList.values : ${newList.values}`);
    let popped = newList.pop();
    console.log(`after popping, the popped one is : ${popped}`);
    console.log(`the array which is newList.values should not contain the popped one: ${newList.values}`);
    expect(newList.values).toContain('roses');
  });

  it('should return the removed item', () => {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    console.log(`before popping, the array, which is newList.values contains: ${newList.values}`);
    let popped = newList.pop();
    expect(popped).toContain('lilies');
    //newList.pop();
    //expect(newList.values).toHaveLength(0);
  });

  it('should return an empty array with the length of zero after popping out "lilies"', () => {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    console.log(`before popping, the array, which is newList.values contains: ${newList.values}`);
    let popped = newList.pop();
    expect(popped).toContain('lilies');
    newList.pop();
    expect(newList.values).toHaveLength(0);
  });
});

describe('List.forEach', function() {
  it('should transform all items in the array to uppercase', function() {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    console.log(`after pushing, the array should contain roses, lilies. It indeed contains: ${newList.values}`);
    let resultsUppercased = [];
    newList.forEach((item) => {
      let uppercased = item.toUpperCase();
      resultsUppercased.push(uppercased);
    });
    expect(resultsUppercased).toEqual(['ROSES', 'LILIES']);
  });
});
