#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of

- what `First Class` functions are

First Class functions are when functions in that particular language are treated the same as any other variable. 

For example, a function can be stored as a variable, as seen below: 

const name = () => {
    console.log('Hamza');
}
name(); // Hamza 

- how this concept applies in JS.

In JS First Class functions can be stored in variables, be passed as arguments to functions, returned by functions, stored in data structures and hold their own properties. 

- what the difference is between declaring a function and calling it

When declaring a function it's assigned to a variable within the current scope. 

For example: 

function add(num1, num2) {
  return num1 + num2;
}

// Here the function's parameters are declared and the expected output.  

When calling a function the code is executed within the function's scope. 

For example: 

function add(num1, num2) {
  return num1 + num2;
}
 
add(2, 4); // here the function is called and the output is 6. 