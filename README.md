![cf](http://i.imgur.com/7v5ASc8.png) lab 05 - List Data Structure
====  
  * installing and using your data structure
    - `List = require('../lib/list.js')`
    - making a new list: `let list = new List()`
  * accessing each method
    - `list.push(ele)` will add a new element to the end of the list.
    - `list.pop(ele)` will remove the last element in the list.
    - `list.forEach(callback)` takes a callback in the form of (ele, index) => {}. Does not return an list.
    - `list.map(callback)` takes a callback in the form of (ele, index array) => {return ele}. Make sure to include a return statement, returns a list of the same length as the original.
    - `list.filter(callback)` takes a callback in the form of (ele, index array) => {return testStatment}. If testStatement is true, the corresponding element will be returned in a new list.
    - `list.filter(callback)` takes a callback in the form of (ele, index array) => {return testStatment}. If testStatement is true, the corresponding element will be returned in a new list.
  * running tests
    - `npm test`
