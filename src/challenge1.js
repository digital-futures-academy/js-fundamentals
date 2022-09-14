// Using the function keyword declare a function called `greet`
// that returns a String "Hi, Ed!"

function greet() {
  const greetings = "Hi";
  const name = "Ed!";
  const newString = greetings.concat(" " + name);
  return newString;
}
const result = greet();
console.log(result);

