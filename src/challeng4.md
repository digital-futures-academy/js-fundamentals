## What are First Class functions? How does this extend to javascript?

First class functions are functions which are treated the same way as variables/values (numbers, arrays, string etc). In javascript this allows us to store functions in variables e.g. 

```js
function example() {
    return 'This is an example';
};

let exampleVariable = example;
```
or use functions to create higher-order functions by using them as parameters or returning them e.g:

```js
    function square(numb) {
        return numb*numb;
    };

    function plus1(mathFunc, numb) {
         return mathFunc(numb) + 1;
    
    };
    
    plus1(square,numb);  /* Returns the square of numb plus 1 */
```
## What is the difference between declaring a function and calling a function?

Declaring a function when you define a function e.g:

```js 
function example2() {


    return 'This is another example.';
};
```

Calling a function is when we tell our code to run the function that we declared e.g

```js 
example2();
```

