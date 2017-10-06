'use strict';

const List = module.exports = function(){
  this.length = 0;
};

// O(n)
List.prototype.sgMap = function (data, cb) {
  const result = [];

  
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    result.push(cb(ele, i, data));
  }

  return result;
};
// O(n)
List.prototype.sgReduce = function (data, cb, startVal) {
  let result = startVal;

  data.forEach((product, index) => {
    result = cb(result, product, index, data);
  });

  return result;
};

// O(n)
List.prototype.sgFilter = function (data, cb) {
  let result = [];
  
  for (let i of data) {
  
    if (cb(i)) {
      result.push(i);
    
    }
  }
  return result;
};
  

// O(n)
List.prototype.sgEach = function(data) {
  let result = [];
  
  for (var i=0; i < data.length; i++) {
    const ele = data[i];
    result.push((ele));
  }
  return result;
};
  
// O(n)
List.prototype.push = function(cb){
  this[this.length] = cb;
  this.length++;
};

// O(n)
List.prototype.pop = function(){
  if (this.length < 1) return; 
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};