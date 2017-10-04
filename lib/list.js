'use strict';

const List = module.exports = function(){
  this.length = 0;
};


List.prototype.pushList = function(cb){
  this[this.length] = cb;
  this.length++;
  //O(n)
};

List.prototype.popList = function(array){
  if(this.length < 1) return null;
  let result = this[this.length - 1];
  this.length--;
  return result;
  //O(n)
};

List.prototype.forEachList = function(array,cb){
  if(this.length < 1) return null;

  let result = [];
  for(let i = 0; i < array.length;i++){
    let ele = array[i];
    let newEle = cb(ele);
    result.push(newEle);

  }
  return result;
  //O(n^2)
};

List.prototype.filterList = function(array,cb){
  if(this.length < 1) return null;

  let result = [];
  for(let i = 0; i < array.length;i++){
    let ele = array[i];
    let newEle = cb(ele);
    if(newEle === true) result.push(ele);
  }
  return result;
  //O(n^2)
};

List.prototype.mapList = function(array,cb){
  if(this.length < 1) return null;

  let result = [];
  for(let i = 0; i < array.length;i++){
    let ele = array[i];
    let newEle = cb(ele);
    result.push(newEle);
    if(newEle === true) result.push(ele);
  }
  return result;
  //O(n^2)
};

List.prototype.reduceList = function(array){
  if(this.length < 1) return null;


  for(let i = 0; i < array.length;i++){
    let acc = array[i];
    let cur = array[i]++;
    let value = acc + cur;
    return value;
  }
};
