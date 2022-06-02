#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

//Answer

A first class function is when a function is treated like a variable. This means that this function can be passed as an argument in another function (this second function would be onsidered a higher-order function as it takes a first-class function as a variable). 

For example: 

//first-class function

const greet = function() {
    console.log("Good morning")
}

greet() //Returns "Good morning"

First class functions are used in higher order functions and objects in JS. It allows developers to pass functions as arguments, e.g: 

function meeting(timeOfDay, name) {
    console.log(greet(), + name);
}; 
meeting(greet, "Shaf"); //logs Good morning Shaf

Declaring a function stores the function in memory. Calling the function then displays what is stored on the console. 