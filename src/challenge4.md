A First Class function is a function that can be:
+ Assigned as a value to variables
    ```js
    function returnName(name) {
        return name;
    }
    
    let n = returnName("Jimbo");
    ```
    The arrow function itself is also an example of a function assigned to a variable
    ```js
    const returnName = name => name;
    ```
+ Passed as an argument by other functions
    ```js
    function returnName(name) {
        return name;
    }

    function greet(name) {
        console.log(`Hello, ${name}`);
    }

    greet(returnName("Jimbo"));
    ```
+ Returned by other functions
    ```js
    function returnName(name) {
        console.log(name);
    }

    function returnFunction() {
        return returnName("Jimbo");
    }

    returnFunction();
    ```

The main idea of these three features is the operation of functions through other functions which makes the coding in JavaScript easier to manage due to its modularity.

Declaring a function consists of defining its structure and behaviour. Whereas, the calling executes its functionality.

+ Declaring Function
    ```js
    function greet() {
        return console.log("Hello!");
    }
    ```
+ Calling Function
    ```js
    greet()
    ```   
