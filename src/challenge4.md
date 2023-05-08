

## what `First Class` functions are
First class functions are functions that are treated as values, these functions can be assigned to variables, they can also be passed as arguments to other functions, and returned from other functions. First class functions can be used like other data types. e.g strings and numbers.


## how this concept applies in JS.
The concept of `First Class functions` applies in javascript, because you can:
- assign functions to variables in javascript.
- pass a function as an argument to other functions
- return a function from other functions in javascript.
All these features allows developers to write more flexible and reusable code.



## what the difference is between declaring a function and calling it
The difference between declaring a function and calling it is that declaring a function means creating a function with a name and parameters, whereas calling a function means executing the function with the provided arguments. So, declaring a function is the process of defining the function, while calling a function is the process of executing the function by passing in the necessary arguments.



### declaring a function
when you're declaring a function, you're essentially creating a function with a name and parameters(values passed into the function as input).

```javascript

function addNumbers(num1, num2) {
  return num1 + num2;
}

```
In the example above, we declared a function called addNumbers that takes two parameters num1 and num2 and returns the sum of those two numbers.


### calling a function
when you call a function, on the other hand, this involves executing the code that is contained within the function's block. sometimes when calling a function, the function takes arguments(values passed into the function when it's called).

```javascript

const result = addNumbers(2, 3);

```

In the example above, we called the addNumbers function with arguments 2 and 3, which will execute the code inside the **addNumbers** function that was declared initially.



