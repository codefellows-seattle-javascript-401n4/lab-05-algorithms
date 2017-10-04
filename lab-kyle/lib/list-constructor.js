'use strict';

const filter = require('./filter.js');
const forEach = require('./for-each.js');
const map = require('./map.js');
const pop = require('./pop.js');
const push = require('./push.js');
const reduce = require('./reduce.js');

const List = module.exports = function (map, forEach, filter, pop, push, reduce) {

  this.map = map;
  this.forEach = forEach;
  this.filter = filter;
  this.pop = pop;
  this.push = push;
  this.reduce = reduce;

};

let test = List.map;
console.log(test);

var testArray = new List;
console.log(testArray.map);
