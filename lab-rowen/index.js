'use strict';

const List = require('./lib/app.js');

let li = new List(1, 2, 3, 4, 5, 6);

console.log(li);

//push proxy
li.drive(7);
//expect li[6].toBe(7)

console.log(li);
//pop proxy
li.burst();
//expect li.burst().toEqual(7)

console.log(li);
//forEach proxy
li.respectively((num)=>{
  return num*2;
});
//expect li.toBe([2, 4, 6, 8, 10, 12, 14])

console.log(li);

//map proxy
li.cartograph((num)=>{
  return num*2;
});
//expect li.cartograph(...cb).toBe([2, 4, 6, 8, 10, 12, 14])

console.log(li);

//filter proxy
li.sift((num) => {
  return num%2 === 0;
});
//expect only even numbers

console.log(li);

//reduce proxy
li.simplify((sum, num)=>{
  return sum+num;
});

console.log(li);
