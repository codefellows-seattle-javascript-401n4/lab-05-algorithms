'use strict';

const List = module.exports = function(){
  this.length = 0;
};


List.prototype.push = function(elem){

  if(elem === undefined) {
    console.log(new Error('Cannot pass undefined element into List'));
    return undefined;
  }

   this[this.length] = elem;
   this.length++;

};

List.prototype.pop = function(){

  if(this.length < 1) {
    console.log(new Error('Cannot delete element from empty List'));
    return undefined;
  }

  let elem = this[this.length -1];
  delete this[this.length -1];
  this.length--;

  return elem;

};

List.prototype.map = function(myFunc) {

  if(myFunc === undefined) {
    console.log(new Error('Cannot pass undefined function into List'));
    return undefined;
  }

  let newList = new List;

    for(let i = 0; i < this.length; i++){
        newList[i] = myFunc(this[i]);
        newList.length++;
    }
      return newList;
}

List.prototype.forEach = function(myFunc){

  if(myFunc === undefined) {
    console.log(new Error('Cannot pass undefined function into List'));
    return undefined;
  }

  let newList = new List;

  for(let i = 0; i < this.length; i++){
    newList[i] = myFunc(this[i]);
    newList.length++;
  }

  return newList;

}

List.prototype.reduce = function(myFunc, initVal){

  if(initVal === undefined) {
    console.log(new Error('Missing initial value argument!'));
    return undefined;
  }

  let sum = 0;

  for(let i = 0; i < this.length; i++){
    sum = myFunc(this[i], sum, initVal);
  }

  return sum;

}

List.prototype.filter = function(myFunc){

  if(myFunc === undefined) {
    console.log(new Error('Cannot pass undefined conditional into List'));
    return undefined;
  }

  let filtered = [];
  let j = 0;

  for(let i = 0; i < this.length; i++){

    if(myFunc(this[i])) {
      filtered[j] = this[i];
      j++;
    }
  }

  return filtered;

}
