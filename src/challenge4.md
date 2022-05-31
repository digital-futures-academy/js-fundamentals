#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

### Answer
- `First Class` functions means that the programming language treats functions as a `First Class` object. Functions are treated in the same way as a variable and can be passed into a function as an argument or be the return value of another function.
- JS allows us to pass a function into anotherFunction as an argument/paramenter the function or as a return value of the other function. A function that receives a function as an arguement AND/OR returns a function is known as a higher order function in JS. All functions are first class in JS, not all functions are higher order. Functions, being first class objects have built-in properties and methods such as 'name' and 'toString()'.
- A function declaration defines the behaviour of the function and what it will do. This behaviour is not implemented until it is 'called' elsewhere in the code

- BONUS: example code 
// simple function declared
sum = (x, y) => return x + y;

//higher order function that recieves a function as an argument declared:
higherOrderFunction = (func, x, y) => {
    return func(x, y);
}

//... the rest of your programme

//higher order function called:
let number = higherOrderFunction(sum, 1, 2)

console.log(number) //logs 3 to the console.

