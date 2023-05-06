# What is a first-class function?
In simple words, a first-class function is a function that can be assigned to a variable, passed as an argument to another function, or returned as a value from a function.

### Here's an example of a first-class function:
#### We're assigning an anonymous function to a variable called func:<br>
const func = function() {<br>
  console.log("Hello, Digital Futures!");<br>
}<br>

# Declaring vs. calling a function

When you declare a function, you're just giving it a name and defining what it will do.<br>
But when you call a function, you're telling the program to execute the statements inside that function.<br>

### An example of declaring and calling a Function:
#### We're declaring a function called greet that takes in a parameter name and logs a greeting message to the console.<br>
function greet(name) {<br>
    return 'Hi, ${name}!';<br>
}<br>
#### We're then calling this function and passing in the argument "Ed".<br>
#### When the function is called, it logs the message "Hello, Ed!" to the console.<br>
console.log(greet('Ed')); // Output: Hi, Ed!<br>


# Extra example of a first-class function:
#### In this example, we're defining two functions (summ and multiply) and using them as arguments to another function (math).<br>
const summ = function (x, y) {<br>
    return x + y;<br>
}<br>

const multiply = function (x, y) {<br>
    return x * y;<br>
}

#### This math function is a higher-order function that takes in an operation function and two numbers, and returns the result of applying that operation to the numbers.<br>
function math(operation, x, y) {<br>
    return operation(x, y);<br>
}<br>

console.log(math(summ, 2, 4)); // Output: 6<br>
console.log(math(multiply, 2, 4)); // Output: 8<br>
