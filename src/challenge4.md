In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

First Class functions are functions in a programming language that are treated like any other variable. This means that a function can be passed as an argument to other functions, returned by other functions and assigned as values to variables.

As an example, in JavaScript this means that we can return a function from another function e.g.

const sayHello = () => {
	return () => {
		console.log("Hello!");
	};
}

Declaring a function is when you define what that function is i.e. the code that your function will run on. However, until you use that declared function in some way it will just sit there and not do anything. This is when you would "call" that function in which case you are telling your program to run the code within the function.

e.g. 

Declaring a function

const declaredFunction = () => {
    console.log("this is a declared function!");
}

Calling that function

declaredFunction();

// message "this is a declared function!" will print