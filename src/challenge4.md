In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation


First-Class Function:
A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

                function nameFunction(argument) {
                    return argument;
                }


In JS:
JavaScript treat function as a first-class-citizens.
This means that functions are simply a value and are just another type of object.

                function greet(name) {
                    return 'Hi, ${name}!';
                }


Declaring it x Calling it:
A function declaration binds a function to a name, or an identifier.

                function nameFunction(argument) {
                    return argument;
                }

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called.

Functions can be called, or executed, elsewhere in code using parentheses ollowing the function name.

                greet();
