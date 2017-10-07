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
