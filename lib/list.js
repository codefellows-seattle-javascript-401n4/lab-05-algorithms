'use strict';

//Must have a length, default to 0
const List = module.exports = function(){
  this.length = 0;
};
//O(1) run time
List.prototype.push = function(element) {
  //put value into the list with the right index
  this[this.length] = element;
  //length has to increase
  this.length ++;
};

//O(1) run time
List.prototype.pop = function() {
  if (this.length === 0) {
    return;
  }
  this.length = this.length - 1;
  return this[this.length];
};

//O(n) run time
List.prototype.forEach = function(callback) {
  if (typeof callback !== 'function') {
    return new Error ('Callback must be a function')
  }
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n) run time
List.prototype.map = function(callback) {
  if (typeof callback !== 'function') {
    return new Error ('Callback must be a function')
  }
  let toReturn = new List();
  for (var i = 0; i < this.length; i++) {
    toReturn.push(callback(this[i], i, this));
  }
  return toReturn;
};

//O(n) run time
List.prototype.filter = function(callback) {
  if (typeof callback !== 'function') {
    return new Error ('Callback must be a function')
  }
  let toReturn = new List();
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      toReturn.push(this[i]);
    }
  }
  return toReturn;
};

//O(n) run time
List.prototype.reduce = function(callback, initialValue) {
  if (typeof callback !== 'function') {
    return new Error ('Callback must be a function')
  }
  //callback has acc, curvalue, curIndex, thisArray
  let toReturn = arguments.length >= 2 ? initialValue : new List();
  let toReduce = this;
  for (var i = 0; i < this.length; i++) {
    toReturn = callback(toReturn, toReduce[i], i, this);
  }
  return toReturn;
};
