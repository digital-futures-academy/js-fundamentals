#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

from my understanding -- they are like self made functions that can be used as built in functions 

JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

Declaring a function consist of a function name, it parameters and the code statement the function is expected to excecute.
for example
function myFunc(theParameters) {
  return theParameters;
}

Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.
Calling the function actually performs the specified actions with the indicated parameters.
for example
myFunc("Name")