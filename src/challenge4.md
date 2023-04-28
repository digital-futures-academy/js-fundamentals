## What `First Class` functions are?
`First Class` functions in programming means these functions can be used just like other values in a language, such as strings and numbers. Here's an example of first-class functions in Python that pass in a function called operation:

    def apply_operation(operation, a, b):
        return operation(a, b)

    def add(a, b):
        return a + b

    result = apply_operation(add, 2, 3)

## How this concept applies in JS?
We can use first-class functions in JavaScript to 
- pass a function as an argument to another function, e.g.


        function calculate(operation, a, b) {
            return operation(a, b);
        }
        const result = calculate(add, 2, 3);

- return a function from another function, e.g.

        function createAdder(a) {
            return function(b) {
                return a + b;
            };
        }
        const add2 = createAdder(2);
        const result = add2(3);

## What the difference is between declaring a function and calling it?
They are two seperate steps in programming. By declaring a function, we define and specify what the function does and what parameters are expected to pass in. Example for declaring a function in JavaStript:

    function declareFunctionExample(parameter1, parameter2) {
    // code to be executed
    }

By calling a function, we are actually executing the code in the function with the parameters passed in. It looks in JavaScript like 

    declareFunctionExample(parameter1, parameter2);