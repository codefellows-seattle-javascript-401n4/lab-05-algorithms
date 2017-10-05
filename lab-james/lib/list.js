'use strict';

const List = module.exports = function(){

  this.length = 0;

};

//=======================================================================================================

List.prototype.push = function(value){

  this[this.length] = value;
  this.length++;

};

//=======================================================================================================

List.prototype.pop = function(){

  delete this[this.length -1];
  this.length--;

};

//=======================================================================================================

List.prototype.forEach = function(callback){

  for(var i = 0; i < this.length; i++){
    this[i] = callback(this[i]);
  }

};

//=======================================================================================================

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

List.prototype.map = function(callback){

  let newList = new List();

  for(var i = 0; i < this.length; i++){
    newList[i] = callback(this[i]);
  }

  return newList;

};

//=======================================================================================================

List.prototype.reduce = function(callback){


};
