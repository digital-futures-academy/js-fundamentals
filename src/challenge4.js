/*
A first class function is a function that is
treated like a first class citizen. It means
that they can be asigned as variables,
passed as arguments to other functions and
returned as values from functions. A first
class function can be used like any other data type.
*/

//An example where a function is assigned to a variable:
function greet(name) {
    return "Hi, " + name + "!"
}
console.log(greet("Aimable"))

//An example where a function is passed as an argument to another function:
function myHigherOrderFunction(callback) {
    console.log("About to call the callback function...");
    callback();
}

myHigherOrderFunction(myFunction);


/*
Declaring a function is where you
instantiate it by using the keyword
'function', giving it a name and passing in
some arguments to be used within the function. The contents of the function are
what performs a desired calculation, expression or action. Functions usually return a value to be used elsewhere in the program.

Calling the function is where we write the name of the function along with any arguments that the function might need in order to execute. Calling a function executes the code within it and returns a value.
*/
