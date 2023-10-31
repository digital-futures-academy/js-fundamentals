### First class functions

- Functions that can be stored in variables and treated like variables
- In Javascript this allows for using higher order functions to make use of
  these first class functions

```js
function addTwo(x) {
  return x + 2;
}

function addFive(plusTwo, x) {
  return plusTwo(x) + 3;
}

console.log(addFive(addTwo, 9));
```

### Declaring vs calling a function

- Declaring a function gives it a name, states what it does and how it's used
- Calling a function makes use of it, passing it data, executing the code inside
  and using the values it generates

```js
// Declaring the function
function example(txt) {
  return `Your passed parameter: ${txt}`;
}

// Calling the function
console.log(example('This is the function being called'));
```
