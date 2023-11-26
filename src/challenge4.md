<!-- #### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation -->

Q1 & 2. In JavaScript, functions are treated as 'First Class citizens' - They can be stored in variables, passed to other functions as arguments, and be returned from other functions as values.

Q3. A function declaration defines a function that will be executed when it is invoked (called). Before ES6, the syntax looked like this:

    <!-- function myFunction() {} -->

In ES6, arrow functions are now used and the function is commonly stored in a variable:

const myFunction = () => {}

Calling a function means executing a function that has already been defined, which is usually done like this:

    <!-- myFunction(); -->
