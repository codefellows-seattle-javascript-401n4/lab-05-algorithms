'use strict';

//const expect = require('expect');


//list constructor
const List = module.exports = function() {
    this.length = 0;
};

//push() and pop() on list prototype
//Big-O runtime comments: 
List.prototype.push = function(element) {
    this[this.length] = element;
    this.length++;
};

List.prototype.pop = function() {
    if (this.length === 0) return;

    let returnValue = this[this.length -1];
    delete this[this.length -1];
    this.length--;

    return [returnValue];
};

//forEach() and filter() methods on list prototype
//Big-O runtime comments: 
List.prototype.forEach = function(callback) {
    if (this.length === 0) return;

    let returnValue = [];
    for(var i = 0; i < this.length; i++) {
        let list = this[i];
        let newList = callback(list);
        returnValue.push(newList);
    }

    console.log('returnValue: ' + returnValue);
    return returnValue;
};

List.prototype.filter = function(callback) {
    if (this.length === 0) return;

    let returnValue = [];
    for(var i = 0; i < this.length; i++) {
        if (callback[this[i]]) {
            returnValue.push(this[i]);
        }
    }

    console.log('returnValue: ' + returnValue);    
    return returnValue;
};



// //map() and reduce() pure methods on list prototype
// //Big-O runtime comments: 
List.prototype.map = function(callback) {
    if (this.length === 0) return;

    let retVal = [];
    for(var i = 0; i < this.length; i++) {
        let list = this[i];
        let newList = callback;
        retVal.push(newList);
        if(newList === true) retVal.push(list);a
    }
  
    return retVal;
};

List.prototype.reduce = function(callback, initialValue) {
    if (this.length === 0) return;

    let accumulator = initialValue || 0;
    for(var i = 0; i < this.length; i++) {
        accumulator = callback(this[i]);
        console.log('accumulator: ' + accumulator);
    }
    console.log('initialValue: ' + initialValue);
    return accumulator;
};