'use strict';

const expect = require('expect');
const List = require('../lib/listDataStructure.js');

describe('testing list data structure', () => {
  it('should have a length of 0', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });
});


describe('map using js method', () => {
  it('shoud return [ 12, 24, 36, 48 ]', () => {
    let list = new List();
    expect(list.sgMap([4, 8, 12, 16], n => n * 3)).toEqual([12, 24, 36, 48]); 
  });
});

describe('reduce using js method', () => {
  it('should return 20', () => {
    let list = new List();
    expect(list.sgReduce([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);
  });
});

describe('filter using js method', () => {
  it('should return [19,25,61]', () => {
    let list = new List();
    expect(list.sgFilter([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);
  });
});

describe('forEach using js method', () => {
  it('should return ["little", "cat", "prince harry"]', () => {
    let list = new List();
    expect(list.sgEach(['little', 'cat', 'prince harry'])).toEqual(['little', 'cat', 'prince harry']);
  });
});

describe('push using js method', () => {
  it('should append a value to the list', () => {
    let list = new List();

    list.push('Straight outta Compton');
    expect(list[0]).toEqual('Straight outta Compton');
    expect(list.length).toEqual(1);

    list.push('Cruising down the street in my six-four');
    expect(list[1]).toEqual('Cruising down the street in my six-four');
    expect(list.length).toEqual(2);

    list.push('Express yourself');
    expect(list[2]).toEqual('Express yourself');
    expect(list.length).toEqual(3);
  
  });
});

describe('pop using js method', () => {
  it('should remove a value', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    let result = list.pop();
    expect(result).toEqual(3);
    expect(list.length).toEqual(2);
    expect(list[2]).toBe(undefined);

    list = new List();
    result = list.pop();
    expect(result).toEqual(undefined);
    expect(list.length).toEqual(0);
  });


});

    