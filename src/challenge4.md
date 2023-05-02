>#### Requirements
>In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
>- what `First Class` functions are
>- how this concept applies in JS.
>- what the difference is between declaring a function and calling it
>- Bonus: give examples for each explanation


A function is considered to be first class if it can be used in the same way as any other variable. In practice this means that a language with first class functions can have functions passed as arguments into other functions / methods / proceedures and can be returned from them. They can also be defined in any scope and defined at run time. For example:
```javascript
function square(x) {
    return x*x;
}

function call(callbackFn, arg) {
    return `Calling internal function: ${callbackFn(arg)}`; // here callbackFn is passed in as an argument and invoked
}

function apply_twice(callbackFn) {
    return x => callbackFn(callbackFn(x)); // we can return functions as well
}

function main() {
    const fourth_power = apply_twice(square); // fourth_power is defined within another function and has been returned. Note the function `square` hasn't been called yet
    console.log(call(fourth_power, 5));
}

main();
```
In Javascript this means we can use functions as arguments to functions (like `callbackFn` in the `call` function), we can return functions from other functions (like `apply_twice` does with an arrow function), we can define functions wherever we want to (in particular inside of other functions, like in (`apply_twice`)) and we can construct new functions at run time (notice how `apply_twice` doesn't know anything about the function `square` when it is called to set `fourth_power` in `main`).

When a function is declared an identifier is defined and memory is set aside for its code. This code is prepared for later execution but isn't run yet. When the function is invoked the (preprocesed) contents are excecuted, work is done and a possible return value is substituted in where the function was called.

Declairing a function in javascript is much like reading through a recipe without actually performing any actions - you get a sense for what will need to happen and might think about which tools and ingredients you'll need to use in the future. When the function is then called you spring into action and create that dish, using a variety of tools and ingredients. At the end you may have something of value to present or the point may just have been to perform some actions (maybe you are learning how to cook a cake and your reason for baking is just to practice).