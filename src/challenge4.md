- First Class functions are functions that are treated like any other variable
- In JavaScript this type of functions can be stored in variables, passed as an argument in other functions, returned form other functions and have their own properties.
- Declare a functions is when you write all the code for that specific task. Call is when you tell to the JS interpreter to run the code from the function.
- In the 'challenge3.js', the function is treated as a variable and is called from the console.log function.

const greet = (name) => {

    return "Hi, " +name +"!"
}

console.log(greet("Fran"));