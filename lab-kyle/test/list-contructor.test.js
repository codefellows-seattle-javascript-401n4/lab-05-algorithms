'use strict';

const expect = require('expect');
const List = require('../lib/list-constructor');

describe('List prototypes', function() {

  it('should PUSH to the list', function() {
    let array = new List();
    array.prototype.push(1);
    expect(array).toBe({length: 1});
  });

});
