# First Class Functions

First Class Functions is just a term used for functions in javascript. The term is used to say that functions can used to not only delare and call; but also used in other functions, values or arguments. If you do not include () after a function it will not execte it and just output the function logic.

Example:

```js
const greet = () => {
    console.log('Hi')
}
greet() // This will output 'Hi' to console
console.log(greet) 
/* This will output the whole function logic. Not great example but javascript allows it as functions are first class functions.
*/
```

# Declaring and Calling Functions

Declaring a function is making a certain word execute a block of code you decide. The block can be almost infinte long.

Calling a function is executing that function.

Example:

```js
// Below is declaring the function
const greet = () => {
    console.log('Hi')
}

// Below is calling the function
greet()
```
