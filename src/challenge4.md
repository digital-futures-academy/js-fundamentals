A first class function is one that can be treated like any other variable.
In JavaScript, this means a function:

- can be passed as a argument into another function
- can be returned by an other function
- or can be assigned as a value to a variable

This concept is used often in JavaScript as a function can 'callback' another function.

#### Examples

Passing function as an argument:

```js
function hello() {
  return "Hey";
}
```

```js
function greet(message, name) {
  console.log(message() + name);
}

greet(hello(), "Ed!");
```

Functions can also be stored as a variable

```js
const storedFunction = () => {
  return "I'm stored in a variable";
};
```

###############

Declaring a function involves stating its name and the code it executes.
Calling a function is when the function is actually used by typing the name followed by parentheses ().

// declaring the function

```js
function myFunc() {
  return "code block that will be executed when actually called";
}
```

// calling the function

```js
myFunc();
```
