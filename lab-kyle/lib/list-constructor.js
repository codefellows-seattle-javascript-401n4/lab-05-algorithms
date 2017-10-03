'use strict';

const filter = require('./filter.js');
const forEach = require('./for-each.js');
const map = require('./map.js');
const pop = require('./pop.js');
const push = require('./push.js');
const reduce = require('./reduce.js');

const List = module.exports = {

  map: map,
  forEach: forEach,
  filter: filter,
  pop: pop,
  push: push,
  reduce: reduce,

};

let test = List.map;
console.log(test);
