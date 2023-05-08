# What is a First Class function?
First class functions are functions that are treated like any other value and can be assigned to a variable, passed as an argument to another function, and returned as a value from a function.

## Example of assigning a function to a variable
// Define a function that adds two numbers
function add(a, b) {
    return a + b;
}

// Assign the function to a variable
const myFunc = add;

// Call the function using the variable name
console.log(myFunc(2, 3)); // Output: 5

# How does this concept apply in JS?
These functions accept other functions as arguments or return functions as an output. 

## Example 
// Create a callback function that will add 2 to whatever is passed in it
const addTwo = num => num + 2;

// Define the higher-order function to check addTwo()
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2; // checks the callback function
    let checkB = func(val); // invokes the callback function

    return checkA === checkB ? func(val) : 'inconsistent results'; // check if checkA and checkB are identical and return the result
}


# What is the difference between declaring a function and calling it
Declaring a function is creating and defining the behaviours of a named function.
We use the function keyword followed by the name, the parameter list in parenthese (if applicable), and the function body in curly braces.

function multiply(a, b) {
    return a * b
}

Calling a function means invoking the function and executing the code in the function. We call a function by using the function name followed by parentheses, and optionally passing any arguments to the function in the parentheses.

const result = multiply(2, 3);
console.log(result); // Output: 6
