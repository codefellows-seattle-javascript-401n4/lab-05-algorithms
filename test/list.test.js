'use strict';

const List = require('../lib/list.js');
const expect = require ('expect');

describe('My New List', () => {

  describe('list structure', () => {
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
      let noPop = listNew.pop();
      expect(noPop).toEqual(undefined);
    });
  });

  describe('forEach() implemenation', () => {
    let list = new List();
    list.push('foo');
    list.push('bar');
    let value = '';
    let callback = (ele) => {
      value = value + ele;
    };
    list.forEach(callback);

    it('returns an error if callback is not a function', () => {
      let notCallback = 'hello';
      expect(list.forEach(notCallback).message).toBe('Callback must be a function');
    });

    it('takes a callback and applies it to each element in a list', () => {
      expect(value).toEqual('foobar');
    });
  });

  describe('map() implemenation', () => {
    let list = new List();
    list.push('foo');
    list.push('bar');
    let callback = (ele) => {
      return ele + '-dragon';
    };
    let originalList = list;
    let mapped = list.map(callback);

    it('doesnt mutate the original list', () => {
      expect(originalList).toEqual(list);
    });

    it('takes a callback and applies each element and returns a list of those new elements', () => {
      expect(mapped).toEqual({'0': 'foo-dragon', '1': 'bar-dragon', 'length': 2});
    });

    it('returns a list with the same length as the original', () => {
      expect(mapped.length).toEqual(list.length);
    });
  });

  describe('filter() implemenation', () => {
    let list = new List();
    list.push('foo');
    list.push('bar');
    let callback = (ele) => {
      return ele === 'foo';
    };
    let filtered = list.filter(callback);

    it('returns an array of equal or less length', () => {
      expect(filtered.length).toBeLessThanOrEqual(list.length);
    });

    it('takes a callback, returns a new list with only elements that pass the callback test', () => {
      expect(filtered).toEqual({'0': 'foo', 'length': 1});
    });
  });

  describe('reduce() implemenation', () => {
    let list = new List();
    list.push('foo');
    list.push('bar');

    it('can add up elements', () => {
      let callback = (acc, cur) => {
        return  acc + cur;
      };
      let reduced = list.reduce(callback, 0);
      expect(reduced).toEqual('0foobar');
    });

    it('can replicate the functionality of map()', () => {
      let callback = (acc, cur) => {
        acc.push(cur);
        return acc;
      };
      let reduced = list.reduce(callback);
      expect(reduced).toEqual( {'0': 'foo', '1': 'bar', 'length': 2});
    });

  });
});
