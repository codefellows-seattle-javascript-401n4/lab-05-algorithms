'use strict';

const List = require('../lib/list.js');
const expect = require('expect');

describe('My New List', () => {
    
    describe('structure', () => {
        
        it('initializes with a length of 0', () => {
            let list = new List();
            expect(list.length).toEqual(0);
        });

    });

    describe('push() implementation', () => {
        
        it('following a push operation, the length should increase by 1', () => {
            let list = new List();

            list.push('foo');
            expect(list.length).toEqual(1);
            expect(list[0]).toEqual('foo');

            list.push('bar');
            expect(list.length).toEqual(2);
            expect(list[1]).toEqual('bar');
        });

    });

    describe('pop() implementation', () => {
        
        it('following a pop operation, the length should decrease by 1 and return popped value', () => {
            let list = new List();

            list.push('foo');
            list.push('bar');
            list.push('foo-bar');

            expect(list.pop()).toEqual(['foo-bar']);
            expect(list.length).toEqual(2);            
        });

    });

    describe('forEach() implementation', () => {
        
        it('following a forEach operation, the array should return stuff that happens for each index in the array', () => {
            let list = new List();   

            list.push(1);
            list.push(2);
            list.push(3);        

            // let callback = jest.fn();


            // list.foreach(callback);
            // expect(callback).toHaveBeenCalled(3); install jest


            expect(list.forEach(i => i * 2)).toEqual([2,4,6]);
            console.log(list);

            
        });

    });
    
    describe('map() implementation', () => {
        
        it('following a forEach operation, the array should return stuff that happens for each index in the array', () => {
            let list = new List();            

            list.push(1);
            list.push(2);
            list.push(3);

            let originalList = list;

            expect(list.map(i => i * 2)).toEqual([2,4,6]);
            expect(list).toEqual(originalList);
        });

    });

    describe('filter() implementation', () => {
        
        it('following a filter finction, the array', () => {
            let list = new List();            

            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.filter(i > 2)).toEqual([3]);
        });

    });

    describe('reduce() implementation', () => {
        
        it('following a reduce operation, the array should return the array total', () => {
            let list = new List();            

            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.reduce()).toEqual([6]);
            // expect(list).toEqual(originalList);
        });

    });

});

