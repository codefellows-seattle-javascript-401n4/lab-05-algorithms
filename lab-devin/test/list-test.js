'use strict';

const expect = require('expect');
const List = require('./list.js');

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
      expect(res.length).toEqual(1);
    });
  });

  
});
