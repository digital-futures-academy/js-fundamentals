# First Class functions

First Class functions are those that are treated like any other variable, meaning they can be assigned as a value to a variable or can be used as arguments to other variables. 

# First Class functions in JS

In JS, we are able to assign a function as the value of a variable. For example: 

const myVar = function MyFunc() {
    return 'MyFunc is a function as value of the variable myVar';
};

We are also able to pass a function as the argument of another function. For example: 

function double(num) {
    return num * 2;
};
function checkEven(func, number) {
    const checkA = number * 2;
    const checkB = func(number);
    if (checkA === checkB)  {
        return `${func(number)} is an even number.`;
    };
};
checkEven(double, 10); //Returns 20  is an even number.
In the example above, we passed the function double() as an argument of the function checkEven(). 

# Declaring a function

We declare a function when we define it, we bind a fuction to it's identifier. We can do so with the keyword function, or as an arrow function. For example: 

function multiply(a, b) {
    return a * b;
};
or
multiply = (a, b) => a * b;

# Calling a function

A function doesn't run unless it's invoked (or called). We do this by writting the function's name and giving it arguments (if function requires these).  Using the example above, we would call the function like this: 

multiply(2, 5); //Returns 10.