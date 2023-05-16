In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

## First Class Functions

In JS, functions are `First Class` objects meaning they are treated like any other JS variable, they are a Function object. Like other type of JS objects, functions can have properties and methods. They can be passed as arguments to other functions, returned from functions and assigned as a value to variables and properties.

Examples of properties JS functions have: .name, .length
Example of methods JS functions have: .toString()

```js
const multiply = (a,b) => {
  return a * b;
}

console.log('Function name:', multiply.name); // logs 'multiply' to the console;
console.log('Number of parameters expected by the function:', multiply.length); // logs 2 to the console;
console.log('String representing the source code of the multiply function', multiply.toString()); 
// logs the source code of the'multiply' function into the console : (a,b) => {return a * b;};
```

## Calling a function vs Declaring a Function

In JS we declare a function with its parameters using a function declaration, arrow syntax or a function expression.
```js
//function declaration, with function keyword 'function', the identifier is 'multiply', parentheses and inside the parentheses parameters a and b, followed by the function's body:
function multiply(a, b) {
  return a * b;
}

//define a function inside an expression:
const product = function(a,b) {
  return a * b;
}

//declare a function using arrow function notation:
const calculateProduct = (a, b) => {
  const product = a * b;
  return product;
}
//declare a function using single line block:
const calculateProduct = (a, b) => a * b;

```

In JS a function declaration binds a function to an identified. We call a function by typing the identifier followed by parentheses. This function call will execute the statements inside the function's body.

```js
//we declare the multiply function
function multiply(a, b) {
  return a * b;
}
//we call the multiply function
multiply(2,4);
```