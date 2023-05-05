# What is a First-Class Function?
In simple words, a first-class function is a function that can be assigned to a variable, passed as an argument to another function, or returned as a value from a function.

### Here's an example of a first-class function:
// In this example, we're assigning an anonymous function to a variable called func.&nbsp;
const func = function() {&nbsp;
  console.log("Hello, Digital Futures!");&nbsp;
}&nbsp;

# Declaring vs. Calling a Function

When you declare a function, you're just giving it a name and defining what it will do.&nbsp;
But when you call a function, you're telling the program to execute the statements inside that function.&nbsp;

### An example of declaring and calling a Function 
// We're declaring a function called greet that takes in a parameter name and logs a greeting message to the console.&nbsp;
function greet(name) {&nbsp;
    return `Hi, ${name}!`;&nbsp;
}&nbsp;
// We're then calling this function and passing in the argument "Ed".&nbsp;
// When the function is called, it logs the message "Hello, Ed!" to the console.&nbsp;
console.log(greet('Ed')); // Output: Hi, Ed!&nbsp;


### Extra example of a First-Class Function:
// In this example, we're defining two functions (summ and multiply) and using them as arguments to another function (math).&nbsp;
const summ = function (x, y) {&nbsp;
    return x + y;&nbsp;
}&nbsp;

const multiply = function (x, y) {&nbsp;
    return x * y;&nbsp;
}

// This math function is a higher-order function that takes in an operation function and two numbers, and returns the result of applying that operation to the numbers.&nbsp;
function math(operation, x, y) {&nbsp;
    return operation(x, y);&nbsp;
}&nbsp;

console.log(math(summ, 2, 4)); // Output: 6&nbsp;
console.log(math(multiply, 2, 4)); // Output: 8&nbsp;