## First Class Functions
A first class (or first order) function is a Javascript object directly. All operations that can be performed on objects work on first class functions. In contrast higher order functions are constructed by taking at least one lower order function as a parameters. First class functions only take objects as parameters. 

```javascript
function greet(name){
    return `Hi, ${name}`
}

// We can store the output of first class function into a variable. 
let greeting = greet();

// Log the string "Hi, Colin" to the console.
console.log(greeting('Colin'))
```

## Function Declaration vs Function Calling
A function *declaration* is the block of code where the function name, object type and any associated algorithms and logic are defined. In ES5, this was typically done using the _function_ keyword, which identifies a declaration. In ES6 the _const_ keyword can also be used as an alternative syntax. A declaration does not execute any of the code contained inside the function.  

```javascript
//Declaration of a sum function
function sum (a,b){
    return a + b
}
```

A function is said to be called when the code references the function name as well as any arguments necessary to the function parameters. This will execute all code  within the block scope of the function. 

```javascript
//Calling a sum function and storing it in a constant named "mySum"
const mySum = sum(2,3);

console.log(mySum)
//Output: 5
```
