'use strict';



const List = module.exports = function(){
  this.length = 0;
};


List.prototype.push = function(element){

  if(element === undefined) {
    console.log(new Error('error undefined element will not pass'));
    return undefined;
  }

   this[this.length] = element;
   this.length++;

};



//o(1)
List.prototype.pop = function(){

  if(this.length < 1) {
    console.log(new Error('error element will not delete from empty list'));
    return undefined;
  }

  let element = this[this.length -1];
  delete this[this.length -1];
  this.length--;

  return element;

};



//o(n)
List.prototype.map = function(myFunction) {

  if(myFunction === undefined) {
    console.log(new Error('error undefined function'));
    return undefined;
  }

  let newList = new List;

    for(let i = 0; i < this.length; i++){
        newList[i] = myFunction(this[i]);
        newList.length++;
    }
      return newList;
}



//o(n)
List.prototype.forEach = function(myFunction){

  if(myFunction === undefined) {
    console.log(new Error('error undefined function'));
    return undefined;
  }

  let newList = new List;

  for(let i = 0; i < this.length; i++){
    newList[i] = myFunction(this[i]);
    newList.length++;
  }

  return newList;

}



//o(n)
List.prototype.reduce = function(myFunction, initValue){

  if(initValue === undefined) {
    console.log(new Error('error initial value is missing from argument!'));
    return undefined;
  }

  let sum = 0;

  for(let i = 0; i < this.length; i++){
    sum = myFunction(this[i], sum, initValue);
  }

  return sum;

}



//o(n)
List.prototype.filter = function(myFunction){

  if(myFunction === undefined) {
    console.log(new Error('error undefined function will not pass into list'));
    return undefined;
  }

  let filtered = [];
  let j = 0;

  for(let i = 0; i < this.length; i++){

    if(myFunction(this[i])) {
      filtered[j] = this[i];
      j++;
    }
  }

  return filtered;

};
