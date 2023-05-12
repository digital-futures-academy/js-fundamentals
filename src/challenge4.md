## Challenge 4

- what `First Class` functions are:  
First Class function in a programming language is when functions are treated like other variables and that means they can be passed as arguments.

- how this concept applies in JS:  
This concept applies in JS as function can be passed as argument of other function: callbacks. That allows the execution of asynchronous code and helps write a more efficient and flexible code.

- what the difference is between declaring a function and calling it:
  - A function is declared when the function is defined with the specified parameters.
  - A function call is when the function is run.

- Bonus: give examples for each explanation:

  - First Class function:
  ``` JavaScript
  function greet() {
    return `hello world!`;
  }

  function uppercase(callback) {
    const upcase_string = callback().toUpperCase();
    return upcase_string;
  }

  console.log(uppercase(greet))
  ```

  - Function declaration:
  ``` JavaScript
  function greet(name) {
    return `Hi, ${name}!`;
  }
  ```

  - Function call:
  ``` JavaScript
  greet('Ed')
  ```
