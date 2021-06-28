A first-class function is a function that is treated like any other variable .

In JS this means that a function can be assigned to a variable or passed into another function as an argument.
Eg: const greet = greeting() {
    console.log("Hello");
  };
This would assign a function called 'greeting' to a variable called 'greet'

A function declaration binds a function to an identifier. i.e: It gives the function a name.
Eg: function greet() {
  console.log("Hello");
};
This would create a function named greet.

A function declaration does not cause a function to run, it just creates + names the function.
In order to get the function to execute, we use a function call.
Eg: greet();
This would cause the function declared previously to execute.
