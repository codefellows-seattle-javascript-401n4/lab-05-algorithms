const expect = require('expect');

const List = require('../lib/list.js');

describe('Setup List Function', () => {
    it('Creating a new List with 0 length', () => {
        let newArray = new List();
        expect(newArray.length).toEqual(0);
    });
});

describe('Tests pushing item into List', () => {
    it('Creating a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('lul');
        expect(newArray.length).toEqual(1);
    });
});

describe('Tests removing item from a list', () => {
    it('Creating a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('lul');
        newArray.push('lul two');
        newArray.pop();
        expect(newArray.length).toEqual(1);
    });
});

describe('Tests correct ordering of List', () => {
    it('Creates a new List with 1 length', () => {
        let newArray = new List();
        newArray.push('lul');
        newArray.push('lul two');
        expect(newArray[0]).toEqual('lul');
        expect(newArray[1]).toEqual('lul two');
    });
});

describe('Tests callback of i => i * 2 is applied to forEach', () => {
    it('Return doubles value of everything passed into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        newArray.forEach(i => i * 2);
        expect(newArray[0]).toEqual(8);
        expect(newArray[1]).toEqual(10);
        expect(newArray[2]).toEqual(12);
    });
});

describe('Tests filter takes current list and returns only values I want', () => {
    it('Only return values greater than 5', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.filter(i => i > 5);
        expect(newList[0]).toEqual(6);
    });
});

describe('Tests mapping through array and returning i * 2', () => {
    it('Return double values of everything passed into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.map(i => i * 2);
        expect(newList[0]).toEqual(8);
    });
});

describe('Test reducing an array, assigning values together', () => {
    it('Return double values of everything passed into array', () => {
        let newArray = new List();
        newArray.push(4,5,6);
        let newList = newArray.reduce(0, (prev, curr) => prev + curr);
        expect(newList).toEqual(15);
    });
});