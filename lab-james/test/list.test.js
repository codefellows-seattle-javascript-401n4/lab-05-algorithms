'use strict';

const expect = require('expect');
const List = require('../lib/list.js');

describe('List', function(){

  it('initializes with a lenght of 0', function(){

    let list = new List();

    expect(list.length).toEqual(0);

  });

});

//======================================================================================================

describe('List.push', function(){

  it('increases length when new value is added', function(){

    let list = new List();
    list.push(1);

    expect(list.length).toEqual(1);

  });

  it('adds the value pushed to the array', function(){

    let list = new List();
    list.push('Hello');

    expect(list[0]).toBe('Hello');

  });

  it('pushes values in order', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list[2]).toEqual(3);

  });

});

//======================================================================================================

describe('List.pop', function(){

  it('lowers the length by one for each value removed', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.pop();
    list.pop();

    expect(list.length).toEqual(1);

  });

  it('removes the last value of array', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.pop();

    expect(list[2]).toBe(undefined);

  });

  it('only removes the last value of array', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.pop();

    expect(list[1]).toEqual(2);

  });

});

//======================================================================================================

describe('List.forEach', function(){

  it('correctly applied the callback function to a value in the array', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.forEach(index => index + 1);

    expect(list[0]).toEqual(2);

  });

  it('applies callback to all indices in array', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.forEach(index => index + 1);

    expect(list[2]).toEqual(4);

  });

  it('does not add any new values to the array', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    list.forEach(index => index + 1);

    expect(list[3]).toBe(undefined);

  });

});

//======================================================================================================

describe('List.filter', function(){

  let list = new List();
  list.push(1);
  list.push(2);
  list.push(3);

  it('correctly returned new array excluding values that did not match condition', function(){

    let newList = list.filter(number => number < 3);

    expect(newList[2]).toBe(undefined);

  });

  it('correctly returned the values that matched the condition', function(){

    let newList = list.filter(number => number < 3);

    expect(newList[1]).toEqual(2);

  });

  it('does not mutate the original array', function(){

    let newList = list.filter(number => number < 3);

    expect(list[2]).toEqual(3);

  });

});

//======================================================================================================

describe('List.map', function(){

  let list = new List();
  list.push(1);
  list.push(2);
  list.push(3);

  let newList = list.map(number => number * 2);

  it('applies callback to a value in the array correctly', function(){

    expect(newList[0]).toEqual(2);

  });

  it('applies callback to all values in the array correctly', function(){

    expect(newList[2]).toEqual(6);

  });

  it('does not mutate the original array', function(){

    expect(list[2]).toEqual(3);

  });

});

//======================================================================================================

describe('List.reduce', function(){

  it('correctly adds together values in array according to callback conditions', function(){

    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);

    let newList = list.reduce((a, b) => a + b, 10);

    expect(newList).toEqual(16);

  });

  it('correctly flattens arrays', function(){

    let list = new List();
    list.push(['kitty', 'cat']);
    list.push(['puppy', 'dog']);
    list.push(['squeaky', 'mouse']);

    let newList = list.reduce((a, b) => a.concat(b), []);

    expect(newList).toEqual(['kitty', 'cat', 'puppy', 'dog', 'squeaky', 'mouse']);

  });

  it('correctly removes duplicates in arrays', function(){

    let list = new List();
    list.push('red');
    list.push('green');
    list.push('blue');
    list.push('red');
    list.push('blue');

    let newList = list.reduce((acc, index) => {
      if(!acc.includes(index)){
        acc.push(index);
      }

      return acc;

    }, []);

    expect(newList).toEqual(['red', 'green', 'blue']);

  });

});
