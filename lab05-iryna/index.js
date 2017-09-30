'use strict';

const list = require('./lib/createList.js');

var i=0;
let listItem = new list('hey', 'you');


for(i; i < 4 ; i++){
  listItem.push('item '+[i]);
};

console.log('index. pushed:', listItem);

listItem.pop();
// console.log('index. popped: '+ pop);
console.log('index. popped: ');
console.dir(listItem);

listItem.forEach();
console.log('index. for each: ');
console.dir(listItem);
