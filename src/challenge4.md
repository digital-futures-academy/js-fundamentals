## Q: What `First Class` functions are and how this concept applies in JS.

    Answer: First-class functions are functions that are treated like any other variable. That is to say, functions can be assigned to another variable, passed as an argument or returned by another function.

    Example: Pass a function as an argument. 

        function sayHi() {
            return 'Hi, ';
        }   

        function greet(sayHiFunction, name) {
            return `${sayHiFunction} ${name}!` 
        }

        greet(sayHi(),'Ed')
    
## What the difference is between declaring a function and calling it

    A: Declarating a function is when you define your function to begin with. Whereas, calling your function executes the code inside the function. Declaration of a certain function always precedes the calling said function. 

    Example:
        
        Declaring

        function greet() {
        return 'Hi, Ed!'
        }

        Calling
        
        greet()


