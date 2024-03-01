## What are "First Class" functions?

Functions are considered "first class" if a programming language treats them as first-class citizens. In other words, if the programming language permits functions to be:

- Passed to and returned from other functions
- Assigned to variables
- Tested for equality.

## How does the concept apply in JS?

Applying the definition above, we can see that functions are "First-Class" in Javascript:

- We can assign functions to variables:

```js
const greet = (name) => `Hi, ${name}!`;
```

- We can test for equality:

```js
const greetCopy = greet;
greet === greetCopy; //true
```

- Functions can be passed to, and returned from, other functions:

```js
[1, 2, 3].map((n) => n ** 2);
```

## What is the difference between declaring a function and calling it?

When we declare a function a function object is created. Generally, we will store a pointer to this object so that we may access it later.

The code in the body of the function is not executed at the point of declaration.

Some examples of function declarations:

```js
function greet(name) {
  return `Hi, ${name}!`;
}
```

```js
const greet = (name) => `Hi, ${name}!`;
```

When we call a function, the body of that function is executed. A function call is an expression evaluating to the return value of that function or undefined if there is no return value.

Generally, a function is called using the function-call operator ():

```js
greet("Ben"); // "Hi, Ben!"
```
