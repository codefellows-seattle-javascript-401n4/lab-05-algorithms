'use strict';
const create = require('../lib/create-list.js');
const expect = require('expect');
let obj = new create('hey','you  ');
let acc = '';

describe('list', function(){
  it ('should return an object length of 2', function(){
    expect(obj.length).toBe(2);
    });

  it ('should return "hey" for obj[0]', function(){
      expect(obj[0]).toBe('hey');
      });
  });


describe('list.pushList', function(){
  it ('should return a changed array length of 3 if a value  is pushed', function(){
    let result = obj.pushList('too');
    expect(result.length).toEqual(3);
    });

  it ('should return "more" for the forth term of array when "more" is pushed', function(){
      let result = obj.pushList('more');
    expect(result[3]).toEqual('more');
    });
  });


describe('list.popList', function(){
    it ('should return 3 for the length of the array if a term is popped out', function(){
      let result = obj.popList();
      expect(result.length).toEqual(3);
      });
      it ('should return an error for term 4 after it was popped out', function(){
        let result = obj.popList();
        expect(result[4]).toEqual(undefined);
        });
    });


describe('list.forEach', function(){
    it ('should return a changed first term  if (ele=>ele+" changed" ) is entered for the rule ', function(){
      let result = obj.forEachList(ele=>ele+' changed');
      expect(result[0]).toBe('hey changed');
      });
    });


describe('list.filterList', function(){
    it ('should return a length of 1, if (ele=>ele.length<=3 ) is entered for the rule ', function(){
      let result = obj.filterList(ele=>ele.length<=3);
      expect(result.length).toBe(1);
      });
    });

describe('list.mapList', function(){
    it ('should return a "hey mapped" for the first element of the array if ele=>ele+" mapped" is entered for the rule', function(){
      let result = obj.mapList(ele=>ele+" mapped");
      expect(result[0]).toBe('hey mapped');
      });
    });


describe('list.reduceList', function(){
    it ('should return a string for reduce if (ele=>acc=acc+ele) is entered for the rule', function(){
      let result = obj.reduceList(ele=>acc=acc+ele);
      expect(result).toBe('heyyou  ');
      });
    });
