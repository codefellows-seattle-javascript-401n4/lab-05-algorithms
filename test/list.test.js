'use strict';


const List = require('../lib/list.js');
const expect = require('expect');


describe('Push', function() {

  let myList = new List;

  it('should return error if function argument is undefined', function(done){

    expect(myList.push()).toBe(undefined);
    done();

  });

  it('should add element to the end of list', function(done){

    let expected = 'Marla';
    myList.push('Marla');
    expect(myList[myList.length -1]).toBe(expected);
    done();

  });

  it('should increase the length of list', function(done){

    let expected = 1;
    expect(myList.length).toBe(expected);
    done();

  });

});

describe('Pop', function() {

  let myList = new List;

  it('should return error if list length is less than 1', function(done){

    let emptyList = new List;
    expect(emptyList.pop()).toBe(undefined);
    done();

  });

  it('should return the last element on list', function(done){

    myList.push('Brian');
    let popped = myList.pop();
    let expected = 'Brian';
    expect(popped).toBe(expected);
    done();

  });

  it('should decrease the length of the list', function(done){

    let expected = 0;
    expect(myList.length).toBe(expected);
    done();

  });

});

describe('Map', function() {

  let myList = new List;
  let newList;

  it('should return error if argument is undefined', function(done){

    expect(myList.map()).toBe(undefined);
    done();

  });

  it('should double the value of property in list', function(done){

    myList.push(2);
    myList.push(4);
    newList = myList.map( a => a * 2 );
    let expected = { 0: 4, 1: 8, length: 2 };
    expect(newList).toEqual(expected);
    done();

  });

  it('should have the correct length', function(done){

    let expected = 2;
    expect(newList.length).toBe(expected);
    done();

  });

});

  describe('forEach', function() {

    let myList = new List;
    let newList;

    it('should return error if function argument is undefined', function(done){

      expect(myList.forEach()).toBe(undefined);
      done();

    });

    it('should add 5 to the value of every property in List', function(done){

      myList.push(2);
      myList.push(4);
      newList = myList.forEach( a => a + 5 );
      let expected = { 0: 5, 1: 7, length: 2 };
      expect(newList).toEqual(expected);
      done();

    });

    it('should have the correct length', function(done){

      let expected = 2;
      expect(newList.length).toBe(expected);
      done();

    });

});

describe('Reduce', function() {

  let myList = new List;
  let sum = 0;

  it('should return error if value is missing in the argument', function(done){

    expect(myList.reduce()).toBe(undefined);
    done();

  });

  it('should return sum of value in the list', function(done){

    myList.push(2);
    myList.push(4);
    sum = myList.reduce((a , b) => b = b + a, 0);
    let expected = 6;
    expect(sum).toEqual(expected);
    done();

  });

  it('should not change the list', function(done){

    let expected = { 0: 2, 1: 4, length: 2 };
    expect(myList).toEqual(expected);
    done();

  });

});

describe('Filter', function() {

  let myList = new List;
  let filtered = [];

  it('should return error if conditional is missing', function(done){

    expect(myList.filter()).toBe(undefined);
    done();

  });

  it('should return the filtered values', function(done){

    myList.push(2);
    myList.push(4);
    myList.push(1);

    filtered = myList.filter( a => a < 3 );
    let expected = [ 2, 1 ];
    expect(filtered).toEqual(expected);
    done();

  });

  it('should not change the list', function(done){

    let expected = { 0: 2, 1: 4, 2: 1, length: 3 };
    expect(myList).toEqual(expected);
    done();

  });

});
