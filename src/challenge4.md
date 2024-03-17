In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of

- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

A first class function is a function that can be treated as any other data type. It allows abstraction technics: assign to variables, return from other functions, passed as arguments

like I did at Challenge3:
Here is declaring a function: const greet=(name) => ...
Also can be used the word "function"

here function is passed and return from other functions:
function greet(name) {...}
function sayHello(greetFunction, name) {
return greetFunction(name)
}
console.log(sayHello(greet,"Bob")) - here is calling the function and displaying the result
