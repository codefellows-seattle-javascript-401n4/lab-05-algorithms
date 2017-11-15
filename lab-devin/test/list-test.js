'use strict';

const expect = require('expect');
const List = require('../list.js');

describe('List method tests', () => {

  describe('testing push', () => {

    it('should add input data to end of array', () => {
      let res = new List;
      res.push('h4x');

      expect(res[0]).toEqual('h4x');
      expect(res.length).toEqual(1);
    });
  });

  describe('testing pop', () => {

    it('should remove last indexed item from array', () => {
      let res = new List;
      res.push('happy');
      res.push('go');

      res = res.pop();

      expect(res).toEqual('go');
      expect(res.length).toEqual(2);
    });
  });

  describe('testing map', () => {

    it('should return a new modified array leaving original unchanged', () => {
      let orig = new List;
      orig.push('I am ');

      let res = orig.map(i => i + 'happy!');

      expect(res[0]).toEqual('I am happy!');
      expect(orig[0]).toEqual('I am ');
    });
  });
});
