'use strict';

//list constructor

const List = modules.exports = function() {
    this.length = 0;
};

//push() and pop() on list prototype
//Big-O runtime comments: 
List.prototype.push = function(val) {
    this[this.length] = val
    this.length++;
}

//forEach() and filter() methods on list prototype
//Big-O runtime comments: 

//map() and reduce() pure methods on list prototype
//Big-O runtime comments: 