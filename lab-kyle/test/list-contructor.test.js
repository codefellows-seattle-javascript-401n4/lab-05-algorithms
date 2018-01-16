'use strict';

const expect = require('expect');
const List = require('../lib/list-constructor');

describe('List prototypes', function() {

  let array = [0];

  it('should PUSH to the list', function() {
    List.prototype.push(array);
    expect(array).toEqual([0,1]);
  });

});
