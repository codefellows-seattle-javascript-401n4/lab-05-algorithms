'use strict';


const list = module.exports = function () {
  this.length = 0;
};



//O(n)
List. prototype.push = function (value) {
  this [this.length] = value;
  this.length++;
};



//0(n)
List.prototype.pop = function () {
  delete this [this.length -1];
  this.length--;
};



//0(n)
List.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    this [i] = callback (this [i]);
    newList.length++;
  }
};
  return newList ();



//0(n)
List.prototype.filter = function (callback) {
  let newList = new List ();

  for (var i = 0; i < this.length; i++) {
    if (callback (this [i]) == true) {
      newList.push (this [i]);
    }
  };
  return newList ();
};



//0(n)
List.prototype.map = function (callback) {
  let newList = new List ();

  for (var i = 0; i < this.length; i++) {
    newList [i] = callback (this [i]);
  }
};
  return newList ();
};



//0(n)
List.prototype.reduce = function (callback, initialValue) {
  let sum = initialValue;

  if (initialValue !== undefined) {
    for (var i = 0; i < this.length; i++) {
      sum = callback (sum, this [i]);
    }
  };

  if (initialValue === undefined) {
    sum = this [0];
    for (var j = 1; j < this.length; j++) {
      sum = callback (sum, this [j]);
    }
  }

  return sum;
};
