In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of

- what `First Class` functions are

Functions can be treated like other values.
e.g. 
```js
const A = function B() {}
```

- how this concept applies in JS.

They can be assigned to variables.
e.g. 
```js
const A = function B() {} 
```
They can be passed as arguments to other functions.
e.g.
```js
function A() {
	return B() + C;
};
```
Functions can be returned from other functions.
e.g.
```js
console.log(A(B()))
```

- what the difference is between declaring a function and calling it

Declaring is the initial steps of creating a function by writing the code that defines what it does.
e.g.
```js
function B() {}
```
Calling a function is when you type the name of the function, sometimes along with the argument you wish to use it on. This can be within a variable, function declarations, and other called functions. 
e.g. B(A) 

- Bonus: give examples for each explanation