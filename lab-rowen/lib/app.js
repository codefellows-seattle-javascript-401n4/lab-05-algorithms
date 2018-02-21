'use strict';

const List = module.exports = function(...args) {
  this.length = 0;

  args.forEach((arg) => {
    this[this.length] = arg;
    this.length++;
  });
};


  //helper function test if cb is typeOf function
let isFunction = (cb) => {
  let retVal = '';
  let err = new Error('Error: cb is not type of function');
  typeof cb === 'function' ? retVal = 'cb is a function' : retVal = err;
  return retVal;
}

// //push
List.prototype.drive = (...args) => {
  args.forEach((arg) => {
    this[this.length] = arg;
    this.length++;
  });
};

//pop
List.prototype.burst = () => {
  let retval = '';
  if (this.length){
    retVal = this[this.length];
    this.length--;
  }else {
    retval = new Error('error: list is empty.'); }
  return retval;
}

//forEach
List.prototype.respectively = (cb) => {
  isFunction(cb);
  for (var i = 0; i < this.length; i++) this[i] = cb(this[i]);
}

//map
List.prototype.cartograph = (cb) => {
  isFunction(cb);
  let retVal = [];
  for (var i = 0; i < this.length; i++) retval[i] = cb(this[i]);
  return retVal;
}

//reduce
//applies a function against an accumulator from left to right
//to return a single value
List.prototype.simplify = (cb) => {
  isFunction(cb);
  let retVal = '';
  for (var i = 0; i < this.length; i++) cb(retVal, this[i]);
  return retVal;
}

//filter
//take a callback with a comparison statement.
//each item in the array that passes the comparison statement get placed in
//a new array and returned.
List.prototype.sift = (cb) => {
  isFunction(cb);
  let retVal = [];
  for (var i = 0; i < this.length; i++) if(cb(this[i])) retVal[i] = this[i];
  return retVal;
}
