'use strict';

const List = module.exports = function(){
  this.length = 0;
};


List.prototype.push = function(elem){

  this[this.length] = elem;
  this.length++;

};

List.prototype.pop = function(){

  if(this.length < 1) {
    return new Error('Cannot delete element from empty List');
  }

  let elem = this[this.length -1];
  delete this[this.length -1];

  return elem;

};

List.prototype.map = function(myFunc) {

  let newList = new List;

    for(let i = 0; i < this.length; i++){
        newList[i] = myFunc(this[i]);
        newList.length++;
    }
      return newList;
}

List.prototype.forEach = function(myFunc){

  let newList = new List;

  for(let i = 0; i < this.length; i++){
    newList[i] = myFunc(this[i]);
    newList.length++;
  }

}

List.prototype.reduce = function(myFunc, initVal){

  let sum = 0;

  for(let i = 0; i < this.length; i++){
    sum = myFunc(this[i], sum, initVal);
  }

  return sum;

}

List.prototype.filter = function(myFunc){

  let filtered = [];

  for(let i = 0; i < this.length; i++){
    if(myFunc(this[i])) filtered[i] = this[i];
  }

  return filtered;

}
