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
    let resultsUppercased = [];
    newList.forEach((item) => {
      let uppercased = item.toUpperCase();
      resultsUppercased.push(uppercased);
    });
    expect(resultsUppercased).toEqual(['ROSES', 'LILIES']);
  });
});

describe('List.filter', function() {
  it('should return the filtered array, containing the element(s) that passed the test', function() {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    let result = newList.filter(item => item.length < 6);
    console.log(`result : `, result);
    expect(result).toContain('roses');
    expect(result).toHaveLength(1);
  });
});

describe('List.map', function() {
  it('should return the mapped array that contains all capitalized items', function() {
    let newList = new List();
    newList.push('roses');
    newList.push('lilies');
    let result = newList.map(item => item.toUpperCase());
    expect(result).toEqual(['ROSES', 'LILIES']);
  });
});

describe('List.reduce', function() {
  it('should return a new array, containing only one item', function() {
    //let newList = new List();
    //newList.push('roses');
    //newList.push('lilies');
    let newList = [8, 10];
    let result = newList.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(`result :`, result);
    expect(result).toEqual(18);
  });
});
