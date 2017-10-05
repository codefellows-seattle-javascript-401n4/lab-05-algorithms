'use strict';



const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(...args){
  args.forEach(arg => {
    this[this.length] = arg;
    this.length++;
  });
};

List.prototype.pop = function(){
  let removed = this[this.length -1 ];
  delete this[this.length - 1];
  this.length--;
  return removed;
};

List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.filter = function(callback) {
  let newArray = new List();
  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

List.prototype.map = function(callback){
  let newArray = new List();
  for(let i=0; i < this.length; i++){
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

List.prototype.reduce = function(callback, initVal){
  let acc = initVal || 0;
  for(var i = 0; i < this.length; i++){
    acc = callback(this[i]);
  }

  return acc;
};