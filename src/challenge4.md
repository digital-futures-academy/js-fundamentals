//#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

First class functions:
First-class functions are functions in a programming language that can be treated like any other data type, such as strings or numbers. They can be assigned to variables, passed as arguments to other functions, and returned from functions.

In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.
In JavaScript, functions can be assigned to variables, passed as arguments to other functions, and returned from functions. This will expand the power of object programming.

Difference between declaration and function call:
Declaring a function includes defining its name, parameters, and body, essentially creating the function. Calling a function involves executing code inside the function body with specific arguments.

// Declaring a function
function greet(name) {
    return `Hi, ${name}!`;
}

// Calling the function
console.log(greet('Bob')); // Output: Hi, Bob!

First-Class Functions:

// Assigning a function to a variable
const sayHello = function(name) {
    console.log(`Hi, ${name}!`);
};

// Passing a function as an argument

function greet(greetingFunc, name) {
    greetingFunc(name);
}
greet(sayHello, 'Bob');

// Returning a function from another function

function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}
const greetInSpanish = createGreeter('Lola');
greetInSpanish('Carlos');

Declaring and Calling Functions

