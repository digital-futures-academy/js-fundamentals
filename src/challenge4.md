- A programming language is said to have First Class functions when its functions are treated the same as any other variable. This means they can be passed as arguments to other functions, returned from functions, assigned to new variables and stored in data structures like objects and arrays. The following JavaScript code passes a function to another function stored on an object:

````js
const functions = {
    greet: (greeter, name) => `${greeter()}, ${name}!`
}

const myGreeting = functions.greet(() => "Hi", "Lawrence");
````

- In JavaScript, Functions are treated as built-in objects just like the Array and Object data types. In addition to typical function declaration, they can also be created with a Function constructor and assigned additional properties. The following is all valid code:

````js
const greet = new Function("name", "return `Hi, ${name}!`");

greet.number = 42;
````

- Declaring a function assigns that function to a variable name accessible from the current scope. Calling a function executes the code within the function's scope.

````js
const greet = (name) => `Hi, ${name}!`; // declaration

const result = greet("Lawrence") // call
````