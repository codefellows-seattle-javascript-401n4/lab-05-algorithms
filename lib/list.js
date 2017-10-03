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
    return
  }
  this.length = this.length - 1;
  return this[this.length];
};

List.prototype.forEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
};


List.prototype.reduce = function(callback, initialValue) {
  //returns an new list
  //callback has acc, curvalue, curIndex, thisArray
  let toReturn = initialValue ? initialValue: new List()
  let toReduce = this
  let length = toReduce.length
  let curIndex = 0
  let curValue = toReduce[curIndex]
  while (curIndex < length) {
    toReturn = callback(toReturn, curValue, curIndex, toReduce)
  }
  return toReturn
};
