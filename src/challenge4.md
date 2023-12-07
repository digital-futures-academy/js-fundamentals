In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

1. First-class functions are functions that can passed as arguments to other functions, returned as values from other functions, and assigned to variables.

2. JavaScript has first-class functions.

When passing a function as an argument, this function is called a callback function. Callback functions are supplied by name and not by invocation:

myFunction (myCallbackFunction);

This present difficulties in invoking callback functions with arguments. There are some workarounds. Some functions can take additional arguments, which are passed into the callback function:

someFunction (myCallbackFunction, argumentForCallback);

An anonymous function with a function body returning an invocation of the callback function with arguments can take the place of what was intended for input:

myFunction (() => myCallbackFunction (argumentForCallback));

Similar to the supply of callback functions, when returning a function, the function is referred to by name and not by invocation:

return functionToBeReturned;

An anonymous function can also be returned:

return () => {console.log ("This function has no name")};

When assigning a function to a variable, it is normal for the function to be anonymous, so that the variable name plays the role of the function name:

let explode = function () {console.log ("Boom!")};

3. Declaring a function and calling a function are two different things. To declare a function means to define the statements that you want to be associated with the function name, as well as the arguments of the function. This does not execute any of the statements.

Calling a function results in the execution of the functions statements. Depending on the declaration, this is done with or without arguments in the required parentheses that follow the function name.