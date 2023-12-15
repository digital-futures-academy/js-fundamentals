  
# First Class Functions

## What are First Class Functions?

First Class Functions are functions that can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.

## How does this concept apply in JS?

In JavaScript, functions are first class objects. You can assign them to variable using var, let, or const. You can pass them as arguments to other functions. You can return them from other functions. You can store them in arrays and objects. You can even call methods on them.

## What is the difference between declaring a function and calling it?

Declaring a function is when you define a function. Calling a function is when you execute the function.

## Examples

```js

// Declaring a function

function  printName(name) {
  console.log(name);
}

// Calling a function
printName("Devin McDaniel");

// Assigning a function to a variable
const name = function(name) {
  return name;
};

const  name2  =  (name)  =>  name; // Arrow function

// Higher-order function
function greet(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

// Usage of higher-order function
const sayHello = greet("Hello");
sayHello("Devin"); // Output: Hello, Devin!

const sayGoodbye = greet("Goodbye");
sayGoodbye("Devin"); // Output: Goodbye, Devin!

// Object with function as method
const person = {
  name:  "Devin",
  sayName: () => console.log(this.name);
};

person.sayName(); // Output: Devin

// Array with functions as elements
const  allGreetings  =  [printName,  name,  name2,  sayHello,  sayGoodbye,  person.sayName];

allGreetings[3]("Devin"); // Output: Hello, Devin!

```
