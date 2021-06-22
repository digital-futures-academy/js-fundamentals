1.  What First Class functions are ?

    - JavaScript has first class functions. This means functions can be treated like other values.

      For example:

    - Functions can be assigned to variables:

    const sayHello = () => {
    return 'Hello';
    };
    console.log(sayHello());
    // "Hello"

    - Functions can be passed as arguments to other functions:

    const sayHelloToPerson = (greeter, person) => {
    return greeter() + ' ' + person;
    };

    console.log(sayHelloToPerson(sayHello, 'John'));
    // Hello John

    - Functions can be returned from other functions:

    const greeterMaker = greeting => {
    return person => {
    return greeting + ' ' + person;
    };
    };

    const sayHelloToPerson = greeterMaker('Hello');
    const sayHowdyToPerson = greeterMaker('Howdy');

    console.log(sayHelloToPerson('Joanne'));
    // "Hello Joanne"

    console.log(sayHowdyToPerson('Joanne'));
    // "Howdy Joanne"

2.  Difference between declaring a function and calling it?

- A function declaration consists of the function keyword, name of the function followed by parentheses and a function body enlosed with curly brackets.

  For example:

function greetWorld(){
console.log('Hello World');
}

- The code inside a function body runs, only when the function is called. To call a function, you type the function name followed by parentheses. This function call runs the function body, between the curly braces in the function declaration.
