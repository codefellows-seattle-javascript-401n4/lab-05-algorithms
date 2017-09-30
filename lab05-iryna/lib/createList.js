'use strict';

const list = module.exports = function(...args){
  for (let i = 0; i < args.length; i++){
    this[i] = args[i];
  }
  this.length = args.length;
};

list.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
 // console.log ('inside');
 return this;
};

list.prototype.pop = function(){
  let changed = this[this.length-1];
  delete this[this.length-1];
  this.length--;
  // console.log (this);
  return changed;
};

list.prototype.forEach = function() {
  let copyList = Object.assign({}, this);
  console.log('newList inside createList', copyList);
  for(let i = 0; i < copyList.length; i++) {
    copyList[i] = copyList[i]+' changed';
    console.log('forEach. inside loop', copyList[i]);
  }
  return copyList;
}
