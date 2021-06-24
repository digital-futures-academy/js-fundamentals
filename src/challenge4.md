First Class functions

Functions which are treated as 'first-class citizens'.
This means they are treated like any other variable
i.e. functions in JS can be:
    passed as arguments to other functions
    returned as values from other functions
    assigned to variables
    stored in data structures.

Declaring a function is defining how it works and calling a function making function to run.

Examples:
greet = (name) => {        //greet function declaration
    return `Hi, ${name}`;
}

console.log(greet('Ed'));  //greet function call