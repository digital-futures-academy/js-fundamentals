#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

1. Some Googling (or rather "DuckDuckGoing") and paraphrasing later...
In general a "first-class object" refers to something (a value) in a programming language which can be:
- stored in a variable
- passed as an argument to functions
- returned by functions
- stored in data structures
- assigned its own properties and methods
By comparison, an object which is not first-class ("second-class" may or may not be useful terminology here) will not allow all of these possiblities (e.g. it might only be possible to pass it as an argument whilst it can't be assigned properties).

2. In JavaScript, functions are first-class objects. This means they behave like any other value and can be stored in variables, arrays and objects. They can also be passed as arguments and returned by other functions as outlined above.

For example, we can store them in a variable as in the arrow function syntax:
    const greet = (name) => console.log(`Hi, ${name}!`);

Higher-order functons such as the .map() method for arrays show functions ("callback functions") being passed as arguments:
    let arr = [1, 2, 3, 4, 5].map(function(num) {return num*7});
    // value of arr is [7, 14, 21, 28, 35]


3. Declaring a function refers to initially defining the function. For example, giving it a name, deciding what parameters it takes as input, and defining the way it behaves.
Calling a function is when we pass an already previously defined function an argument (input) and it gives us an output.
E.g.

function RaiseRoof(roofHeight) {
    // This is the function declaration. It has one required parameter, roofHeight.
    roofHeight += 1;
    console.log("The roof has been raised!!!");
    return roofHeight;
}

let myRoof = 4;
let myNewRoof = RaiseRoof(myRoof);
// This is the function call. We have passed it myRoof as an argument. We expect it to log a message to the console and return the height of my new roof, which we store in a variable myNewRoof.

