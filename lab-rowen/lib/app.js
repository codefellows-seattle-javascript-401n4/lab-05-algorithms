'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.pusher = function(...args){
  args.forEach(arg => {
    this[this.length] = arg;
    this.length++;
  });
  this.length = 0;
};

List.prototype.popper = function(){
  let popped = this[this.length-1];
  this.splice(List.length-1,1);
  this.length = 0;
  return popped;
};
