'use strict';

let List = module.exports = exports = function () {

  //values are mutable data
  //this = this instance
  this.values = [];
  console.log(`this.values ${this.values}`);
};

List.prototype.push = function(newItem) {
  return this.values.push(newItem);
};


//.pop removes the last element from the array. The returned value is the removed element from the array; returns 'undefined' if the array is empty.
List.prototype.pop = function() {
  return this.values.pop();
};


//pure functions only care about their own inputs and spit out outputs.  They don't affect other things.
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.values.length; i++){
    callback(this.values[i]);
  }
};


List.prototype.filter = function(callback) {
  let filtered = [];

  for(let i = 0; i < this.values.length; i++){
    if (callback(this.values[i]) === true) {
      filtered.push(this.values[i]);
    }
  }

  return filtered;
};


List.prototype.map = function(callback) {
  let mapped = [];
  for(let i = 0; i < this.values.length; i++){
    let modifiedElement = callback(this.values[i]);
    mapped.push(modifiedElement);
  }

  return mapped;
};


List.prototype.reduce = function(callback) {
  let accumulator = this.values[0];

  //i = index
  for(let i = 1; i < this.values.length; i++){
    accumulator = callback(accumulator, this.values(i), i, this.values);
  }

  return accumulator;
};
