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


list.prototype.forEach = function(fn) {
  let listCopy = Object.assign({}, this);

  for(let i = 0; i < listCopy.length; i++) {
    listCopy[i] = fn(listCopy[i]);
  }
  return listCopy;
}


list.prototype.filterList = function(fn) {

     let listCopy = new list;
     for(let i = 0; i < this.length; i++){
       if (fn(this[i])) {
         listCopy[i]=this[i];
         listCopy.length++;
       }
     }

  return listCopy;
}
