'use strict';



const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(...args){
  args.forEach(arg => {
    this[this.length] = arg;
    this.length++;
  });
};

List.prototype.pop = function(){
  let removed = this[this.length-1];
  this.splice(List.length-1,1);
  return removed;
};



