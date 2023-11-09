#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of

- what `First Class` functions are
First-class functions mean that functions in a programming language are treated as flexible entities. You can assign them to variables, pass them as arguments to other functions, and return them from other functions. It's a feature that allows for a lot of flexibility.

// Function declaration
function sayHello(name) {
  return "Hello, " + name + "!";
}

// Assigning the function to a variable
const greetingFunction = sayHello;

// Using the function stored in a variable
console.log(greetingFunction("Alice"));

- how this concept applies in JS.
In JavaScript, first-class functions mean that functions are treated as flexible elements. You can store them in variables, pass them as arguments to other functions, and return them from functions. This flexibility allows for dynamic coding, making functions a central and adaptable part of JavaScript programming.

- what the difference is between declaring a function and calling it
Declaring a function means defining it, essentially telling the computer what the function does and what parameters it takes. 
function greet(name) {
  console.log("Hello, " + name + "!");
}

Calling a function means actually using it, making it execute the code inside it.
greet("John");

- Bonus: give examples for each explanation

