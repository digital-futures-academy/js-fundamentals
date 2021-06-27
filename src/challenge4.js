// A first class function is one which can be treated like any other value. This requires 3 important behaviours:
// - Functions can be assigned to variable (for example the function greet in challenge 3)
// - Function can be passed into other functions (for example, in our answer to challenge 2, lines 5 and 6.)
// - Functions can be returned from other functions (example below)

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