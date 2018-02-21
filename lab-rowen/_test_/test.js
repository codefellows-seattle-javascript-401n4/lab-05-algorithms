'use strict';

const expect = require('expect');
const List = require('./../lib/app.js');

describe('constructor function', ()=>{
  it('should return an empty array object', ()=>{
    let array = new List();
    expect(array.length).toEqual(0);
  });
});

describe('drive', ()=>{
  it('increases the length of the array', ()=>{
    let array = new List();
    array.drive('boil', 'cauldron');
    let expected = 2;
    let actual = array.length;
    expect(actual).toEqual(expected);
  });
});

describe('drive', ()=>{
  it('pushed 3 args', ()=>{
    let array = new List();
    array.drive('boil','roil','trouble');
    let expected = 3;
    let actual = array.length;
    expect(actual).toEqual(expected);
  });
});

describe('drive', ()=>{
  it('stores driven strings', ()=>{
    let array = new List();
    array.drive('boil', 'toil', 'trouble');
    let expected = 'trouble';
    let actual = array[3];
    expect(actual).toBe(expected);
  });
});

describe('burst', ()=>{
  it('decreses array length', ()=>{
    let array = new List();
    array.drive('boil', 'toil', 'trouble');
    array.burst();
    let expected = 2;
    let actual = array.length;
    expect(actual).toEqual(expected);
  });
});

describe('burst', ()=>{
  it('returns the array item to be deleted', ()=>{
    let array = new List();
    array.drive('toil', 'trouble');
    let expected = 'trouble';
    let actual = array.burst();
    expect(actual).toBe(expected);
  });
});

describe('burst', ()=>{
  it('should delete the last thing in the array', ()=>{
    let array = new List();
    array.drive(0,1,2,3);
    array.burst();
    let expected = {
      0: 0,
      1: 1,
      2:2,
      length : 3,
    };
    expect(array).toEqual(expected);
  });
});

describe('respectively', ()=>{
  it('applies the callback to each thing in the array', ()=>{
    let array = new List();
    let expected = 3;
    let actual = 0;
    array.drive(1,1,1);
    array.respectively( num => actual+=num);
    expect(actual).toEqual(expected);
    expect(array.length).toEqual(3);
  });
});

describe('filter', ()=>{
  it('filters out odd numbers', ()=>{
    let array = new List();
    array.drive(1,2,3,4,5,6);
    let actual = array.filter(num => num % 2 ===0);
    let expected = {
      0: 2,
      1: 4,
      2: 6,
      length: 3,
    }
    expect(actual).toEqual(expected);
  });
});



describe('cartograph', ()=>{
  it('changes original array with callback', ()=>{
    let array = new List();
    array.drive(1,2,3);
    let actual = array.cartograph(num => num * 2);
    let expected = {
      0: 2,
      1: 4,
      2: 6,
      length: 3,
    };
    expect(actual).toEqual(expected);
  });
});
