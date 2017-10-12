const expect = require('expect');

const List = require('../lib/list.js');

describe('Setup List Function', () => {
    it('should create a new List with 0 length', () => {
        let newArray = new List();
        expect(newArray.length).toEqual(0);
    });
});

describe('Test pushing item into List', () => {
    it('should create a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('hello');
        expect(newArray.length).toEqual(1);
    });
});

describe('Test removing an item from a list', () => {
    it('should create a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('hello');
        newArray.push('hello two');
        newArray.pop();
        expect(newArray.length).toEqual(1);
    });
});

describe('Test correct ordering of List', () => {
    it('should create a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('hello');
        newArray.push('hello two');
        expect(newArray[0]).toEqual('hello');
        expect(newArray[1]).toEqual('hello two');
    });
});

describe('test that callback of i => i * 2 is correctly applied to forEach', () => {
    it('should return doubles values of everything I pass into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        newArray.forEach(i => i * 2);
        expect(newArray[0]).toEqual(8);
        expect(newArray[1]).toEqual(10);
        expect(newArray[2]).toEqual(12);
    });
});

describe('test that filter takes the current list and returns only the values i want', () => {
    it('should only return values greater than 5', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.filter(i => i > 5);
        expect(newList[0]).toEqual(6);

    });
});

describe('test mapping though array and returning i * 2', () => {
    it('should return doubles values of everything I pass into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.map(i => i * 2);
        expect(newList[0]).toEqual(8);
  
    });
});

describe('test reducing an array, assing values together', () => {
    it('should return doubles values of everything I pass into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.reduce(0, (prev, curr) => prev + curr);
        expect(newList).toEqual(15);
  
    });
});