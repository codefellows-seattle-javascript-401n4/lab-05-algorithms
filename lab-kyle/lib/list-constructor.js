'use strict';

const List = module.exports = function(){
  this.length = 0;
};

List.prototype.push = function(...args){

  args.forEach(function(arg){
    this[this.length] = arg;
    this.length++;

  });
};

List.prototype.map = function(callback){

  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;

};

List.prototype.pop = function(){

  if(this.length === 0){
    return undefined;
  } else {

    let popped = this[this.length - 1];
    delete this[this.length -1];

    return popped;

  }
};

List.prototype.forEach = function(callback){

  for (let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }

};

// List.prototype.filter = function(callback, ...args){
//
//
//
// };

// List.prototype.reduce =function(){
//
//
//
// };
