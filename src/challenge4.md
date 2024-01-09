### Challenge 4
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of

#### - what `First Class` functions are

A function that is treated as a 'first-class citizen', meaning that within a programming language it can be used as a variable.

#### - how this concept applies in JS.

In JavaScript a first class function can be stored under a variable (var, let, const), passed to another function as an argument, used within another function or returned by a function as a value.

**For example:**

Stored under a variable:

```js
const greet = function() => {
  return 'Hi, Ed!'
}
```

Passed to another function:

```js
function hello() {
  return 'Hello'
}

function greetingMessage(greeting, name) {
  return `${hello()}, ${name}!`
}

// Calling the function:

greetingMessage(hello(), 'Ed')

```

Returned by another function:

```js
function greet() {
  return function() {
    return 'Hi, Ed!'
  }
}
```

Called inside another function:

```js
function hello() {
  return 'Konnichiha'
}

function greeting() {
  return `${hello()}, Ed!`
}

console.log(greeting())
```

#### - what the difference is between declaring a function and calling it?

Declaring a function is defining how data is passed through a function and what data you want it to return.

**For example:**

```js

function greet() {
  console.log('Hi, Ed!')
}

```

Calling a function is using/triggering  the function. This would be done by stating its name, followed by parentheses.

**For example:**

```js

greet()

```

The function only runs if it is called.
