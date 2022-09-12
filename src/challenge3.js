const greet = (name) => {
  const greetings = "Hi";
  const newString = greetings.concat(" " + name);
  return newString;
};
const result = greet("Ed!");
console.log(result);
