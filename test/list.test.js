'use strict';

const List = require('../lib/list.js');
const expect = require ('expect');

describe('My New List', () => {
  describe('structure', () => {
    it('inits with a length of 0', () => {
      let list = new List();
      expect(list.length).toEqual(0);
    });
  });

  describe('push() implemenation', () => {
    let list = new List();
    let element = 'foo';
    list.push(element);

    it('increases the length of array by 1', () => {
      expect(list.length).toEqual(1);
    });
    it('adds the new element to the end of the array', () => {

      expect(list[0]).toEqual(element);
    });
  });

  describe('pop() implemenation', () => {
    let list = new List();
    let element = 'foo';
    list.push(element);
    let popped = list.pop();

    it('decreases the length of array by 1', () => {
      expect(list.length).toEqual(0);
    });
    it('returns the last element from an array', () => {
      expect(popped).toEqual(element);
    });
    it('returns undefined if there isnt anything in the list', () => {
      let listNew = new List();
      let noPop = list.pop();
      expect(noPop).toEqual(undefined);
    });
  });

  describe('forEach() implemenation', () => {
    let list = new List();
    list.push('foo')
    list.push('bar')
    let value = ''
    let callback = (ele, index, array) => {
      value = value + ele;
    }
    list.forEach(callback)
    it('takes a callback and applies each element in a list', () => {
      expect(value).toEqual('foobar');
    });
  });

  describe('reduce() implemenation', () => {
    let list = new List();
    list.push('foo')
    list.push('bar')
    console.log(list.length);
    // let callback = (acc, cur, index, array) => {
    //   acc = acc + (cur)
    //   return acc
    // }
    // let reduced = list.reduce(callback)
    //
    // it('takes a callback and applies it to an array', () => {
    //   expect(reduced).toEqual();
    // });

  });
});
