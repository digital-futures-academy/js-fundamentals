#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

### My Response:

## 'First Class' functions are a way to write block of re-usable code which can be used to produce desired results or actions under pre-set or no inputs. it is a way to keep our code clean and DRY. with aim to make developers and testers life easier by making our code readable. for example (a python function to take a user name and greet them):

def greet(name):
    return f"Hi, {name}!"

## All programming languagues have functions even languages like F# are introduced for people who like functional programming to organise their code. JavaScript have this facility since early days by using function key word we can declare a block with or without name(anonymous functions) and parenthesis -with or without parameters - then a block of code to run in curly brackets called function's body. for example:

function greet(name) {
    return "Hi, ${name}";
}

## with introduction of ecma script 6 we now have a simplified version of syntax which is less writing for these kind of function which are not doing much in there functional body, above funtion declared in Python and JavaScript both do the same thing and it can be written with new arrow function syntax in this way:

const greet = name => "Hi, ${name}";

## All above examples are a way to declare a function. Writing all the instruction in the pre-set manner presented above. when it's time to use these blocks of instructions we actually call the funtion in the following way with or without arguments (placeholder of argument is called parameter and now you have to provide real data you want processed when calling a function if your function is designed to handle input) folowing are the example of calling the functions:

greet("Ed") ##Pythonic way of calling a function. 
greet("Ed"); //javaScript or EcmaScript way of calling a function. 