'use strict';

const list = require('./lib/create-list.js');

var i=0;
let listItem = new list('hey', 'you');


for(i; i < 4 ; i++){
  listItem.push('item '+[i]);
};

console.log('index. pushed: ', listItem);

listItem.pop();
console.log('index. popped: ', listItem);



console.log('index. for each: ', listItem.forEach(ele=>ele + ' changed'));



// listItem.filterList();
// console.dir(listItem);
