*lib/list.js*

 _Constructor_

   Construct new *List* object by invoking `new` keyword, e.g. `let myList = new List`;
   Each *List* object contains one parameter, a *length*, which is initialized to 0.


 _Methods on List Prototype_

   *push()*

     Add a single key:value to the end of the List object

     `list.push('a');
      list.push('b');
      console.log(list);` // { 0: 'a', 1: 'b', length: 2}

    *pop()*

      Remove a single key:value from the end of the List object and return it

      // Given a List myList: { 0: 'a', 1: 'b', length: 2}
      `let newList = myList.pop();
       console.log(newlist);` // 'b'
      `console.log(myList)` // { 0: 'a' length: 1}

    *map()*

      Perform a passed in function to each property's value, then return new List

      // Given a List myList: { 0: 2, 1: 4, length: 2}
      `let newList = myList.map( a => a + 3);
       console.log(newlist);` // { 0: 5, 1: 7, length: 2}
      `console.log(myList)` // { 0: 2, 1: 4, length: 2}  (unchanged!)

    *forEach()*

      Perform a passed in function to each property's value, then return new List

      // Given a List myList: { 0: 2, 1: 4, length: 2}
      `let newList = myList.forEach( a => a * 3);
       console.log(newlist);` // { 0: 6, 1: 12, length: 2}
      `console.log(myList)` // { 0: 2, 1: 4, length: 2}  (unchanged!)

    *filter()*

      Return all values that evaluate to true based on a passed in conditional
      Returns an array

      // Given a List myList: { 0: 2, 1: 4, length: 2}
      `let newList = myList.filter( a => a < 3); ` //Evaluate each value against a < 3
       `console.log(newlist);` // [ 2 ]
      `console.log(myList)` // { 0: 2, 1: 4, length: 2}  (unchanged!)

    *reduce()*

      Applies a function against an accumulator and each element in List to reduce it to a single value.

      // Given a List myList: { 0: 2, 1: 4, length: 2}
      `let newList = myList.reduce((a , b) => b = b + a, 0); `
       `console.log(newlist);` // 6 (Sum of all values)
      `console.log(myList)` // { 0: 2, 1: 4, length: 2}  (unchanged!)

  _Testing_

     Type 'mocha' it the console to run tests
