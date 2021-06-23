# First Class Functions

## What does it mean?
In javascript, functions are first class, which means that are treated the same as other data types/objects. This means that they can be called as arguments to other functions, 

```js
function square(num){
    return num * num;
}

function cube(num, squareFunction){
    return squareFunction(num) * num; 
}

let number = cube(7, square);
```

assigned to variables,
```js
const greet = (name) => {
    return `Hello ${name}!`;
}

```
 have their own methods and properties,
```js 
const greet = (name) => {
    return `Hello ${name}!`;
}
console.log(greet.name);
```
and be part of a data structure such as an array. 

```js
function square(num){
    return num * num;
}

const greet = (name) => {
    return `Hello ${name}!`;
}

var functions = [square, greet]; 
console.log(functions[1]("Ryan"));

```

## Declaring vs Calling

To create a function, it needs to be declared. 

```js 
function addOne(num){
    return num +1;
}

const Goodbye = (name) => {
    return `Bye ${name}!`;
}
```
This means that a function is created. 

To use a function, you need to call it. 

```js 
console.log(addOne(10));
```

This executes the code inside of the function and returns a result if the return statement is used  inside of the function. 

Both examples require the use of brackets to signify the use of a function and specify any arguments.  