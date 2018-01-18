'use strict';

const List = module.exports = function(){
  this.length = 0;
};

List.prototype.push = function(args){

  this[this.length] = args;
  this.length++;

};

List.prototype.map = function(callback){

  let result = new List();

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;

};

List.prototype.pop = function(){

  if(this.length === 0){
    return 'nothing to pop';
  } else {
    delete this[this.length -1];
    this.length--;
  }
};

List.prototype.forEach = function(callback){

  for (let i = 0; i < this.length; i++){
    this[i] = callback(this[i]);
  }

};

List.prototype.filter = function(callback){
  let newArray = new List();

  for(let i = 0; i <= this.length; i++){
    if(callback(this[i], i, this)){
      newArray.push(this[i]);
    }
    return newArray;
  }

};

List.prototype.reduce =function(callback, initialValue){
  let acc = initialValue;

  for(var i = 0; i < this.length; i++){
    acc = callback(this[i]);
  }
  return acc;

};
