// Using the function keyword declare a function called `greet`
// that returns a String "Hi, Ed!"

function greet(name = "Ed") {
    return `Hi, ${name}!`;
}

console.log(greet());