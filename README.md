![cf](http://i.imgur.com/7v5ASc8.png) lab 05 - List Data Structure
====
*******Directions********
- To test, open a terminal and run "mocha" or "npm run test".
- For map and reduce, enter an array as a function argument and it will return a new array with the mutated data.

## To Submit this Assignment
  X fork this repository
  X write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  X push to your repository
  x submit a pull request to this repository
  x submit a link to your PR in canvas
  x write a question and observation on canvas

## Requirements
#### Configuration
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include
  X **README.md** -- with a documentation about your lab
  X **.gitignore** -- with a robust .gitignore
  X **.eslintrc** -- with the class .eslintrc file
  X **.eslintignore** -- with the class .eslintignore
  X **.package.json** -- with all dependencies and dev-dependencies
  X **lib/** -- directory for holding your programs helper modules
  X **test/** -- directory for holding your programs unit and integration tests

#### Testing
  * write at least three test assertions for each method of the List Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks
  * implement a List constructor
  * implement `push()` and `pop()` on the List prototype
  * implement `forEach()` and `filter()` as pure methods on the List prototype
  * implement `map()` and `reduce()` as pure methods on the List prototype
  * in comments above or within each function, note the Big-O runtime

## Bonus Points:
  * 2pts
  * refactor the List data structor so that `push()` and `pop()` both have a constant / O(1) run time

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Completed FP methods: 2pts
  * Big-O notation: 2pt
