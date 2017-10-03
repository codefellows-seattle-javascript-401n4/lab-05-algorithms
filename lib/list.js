'use strict';

//Must have a length, default to 0

const List = module.exports = function(){
  this.length = 0;
};

List.prototype.push = function(element) {
  //put value into the list with the right index
  this[this.length] = element;
  //length has to increase
  this.length ++;
};

List.prototype.pop = function(element) {
  if (this.length === 0) {
    return;
  }
  this.length = this.length - 1;
  return this[this.length];
};

List.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.map = function(callback) {
  let toReturn = new List();
  for (var i = 0; i < this.length; i++) {
    toReturn.push(callback(this[i], i, this));
  }
  return toReturn;
};

List.prototype.filter = function(callback) {
  let toReturn = new List();
  let newLength = 0
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      toReturn.push(this[i]);
    }
  }
  return toReturn;
};

List.prototype.reduce = function(callback, initialValue) {
  //returns an new list
  //callback has acc, curvalue, curIndex, thisArray
  let toReturn = arguments.length >= 2 ? initialValue : new List();
  let toReduce = this;
  for (var i = 0; i < this.length; i++) {
    toReturn = callback(toReturn, toReduce[i], i, this)
  }
  return toReturn;
};
