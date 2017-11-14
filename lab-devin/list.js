'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(v) {
  this[this.length] = v;
  this.length++;
  return this.length
};

List.prototype.pop = function() {
  let res = this[this.length - 1];
  this[this.length -1] = undefined;
  this.length--;
  return res;
};

List.prototype.map = function(cb) {
  let res = new List;

  for(let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

List.prototype.filter = function(cb) {
  let res = new List;

  for(let i = 0; i < this.length; i++) {

    if(cb(this[i]))
      res.push(this[i]);
  }
  return res;
};

List.prototype.reduce = function(cb, initial) {
  let i, accum;

  if(initial) {
    accum = initial;
    i = 0;
  } else {
    accum = this[0];
    i = 1;
  }

  for(i; i < this.length; i++) {
    accum = cb(accum, this[i], i);
  }
  return accum;
};

List.prototype.slice = function(start, stop) {
  let res = new List, i, end;

  if(start) {
    i = start;
  } else {
    i = 0;
  }

  if(stop) {
    end = stop;
  } else {
    end = this.length;
  }

  for(i; i < this.length; i++) {
    res.push(this[i]);
  }
  return res;
};
