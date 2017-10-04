'use strict';

const List = require('../lib/list.js');
const expect = require('expect');

describe('push', () => {
  it('should return fall and a list length of 1', () => {
    let list = new List();
    list.pushList('Fall');
    expect(list[0]).toBe('Fall');
    expect(list.length).toEqual(1);
  });
});

describe('pop', () => {
  it('should return summer and a length of 1', () => {
    let list = new List();
    list.pushList('Fall');
    list.pushList('Summer');
    let result = list.popList();
    expect(result).toBe('Summer');
  });
  it('should return null', () => {
    let list = new List();
    let result = list.popList();
    expect(result).toBe(null);
  });
});

describe('for each', () => {
  it('should return 2', () => {
    let list = new List();
    list.pushList(1);
    list.pushList(2);
    list.pushList(3);
    let result = list.forEachList([1,2,3],n => n * 3);
    expect(result).toEqual([3,6,9]);
  });
  it('should return null', () => {
    let list = new List();

    let result = list.forEachList(n => n * 3);
    expect(result).toBe(null);
  });
});

describe('filter test', () => {
  it('should return 6,7', () => {
    let list = new List();
    list.pushList(5);
    list.pushList(6);
    list.pushList(7);
    let result = list.filterList([5,6,7], n => n > 5);
    expect(result).toEqual([6,7]);
  });
});

describe('map test', () => {
  it('should return 2,3', () => {
    let list = new List();
    list.pushList(4,5);
    let result = list.mapList([4,5],n => n -2);
    expect(result).toEqual([2,3]);
  });
});

describe('reduce test', () => {
  it('should return 10', () => {
    let list = new List();
    list.pushList(5,5);
    let result = list.reduceList([5,5,5,5], (acc,cur) => acc + cur );
    expect(result).toEqual(10);
  });
});
