First Class functions:
- means that functions can be treated like other objects within JavaScript
    -Stored in a variable
    -Used as a argument for another function
    -Returned from a function

Examples:
const test = () => {
    return `Hello`;
}

const test2 = () => {
    return function() => {
        return 'World';
    }
}

const test3 = (input1, input2) {
    console.log(input1() + ' ' + input2());
}

let helloWorld = test3(test, test2);


