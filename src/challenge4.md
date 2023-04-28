#### First Class Functions

- First class functions in Javascript are essentially objects with their own properties and methods.
- For example, you can use the '.name' property to access the name of the function or the '.length' property to access the number of arguments passed to the function.
- Functions can be passed as arguments to other functions. These are called higher-order functions.
- Declaring a function involves defining the blueprint or what it will do. Calling a function refers to actually invoking the function, causing it to run.

#### Examples


##### Declaring/defining a function.
```
function bakeCake(flavour) {
return "Here is your " + flavour + " cake!";
}
```

##### Calling/invoking a function.

```
cherryCake = bakeCake('Cherry');
console.log(cherryCake); // This prints 'Here is your Cherry cake!'
```

##### Accessing a function's properties.

```
console.log(bakeCake.name) // This prints 'bakeCake'.
console.log(bakeCake.length) // This prints '1' because the function only takes 1 argument of flavour.
```



