'use strict';

const List = module.exports = function(){

  this.length = 0;

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.push = function(value){

  this[this.length] = value;
  this.length++;

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.pop = function(){

  delete this[this.length -1];
  this.length--;

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.forEach = function(callback){

  for(var i = 0; i < this.length; i++){
    this[i] = callback(this[i]);
  }

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.filter = function(callback){

  let newList = new List();

  for(var i = 0; i < this.length; i++){
    if(callback(this[i]) == true){
      newList.push(this[i]);
    }
  }

  return newList;

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.map = function(callback){

  let newList = new List();

  for(var i = 0; i < this.length; i++){
    newList[i] = callback(this[i]);
  }

  return newList;

};

//=======================================================================================================
//Big-O runtime: O(n)
List.prototype.reduce = function(callback, initialValue){

  let acc = initialValue;

  if(initialValue !== undefined){
    for(var i = 0; i < this.length; i++){
      acc = callback(acc, this[i]);
    }
  }

  if(initialValue === undefined){
    acc = this[0];
    for(var j = 1; j < this.length; j++){
      acc = callback(acc, this[j]);
    }
  }

  return acc;

};
