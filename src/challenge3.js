// Create an arrow function named greet
// Give it a name argument
// The function returns "Hi, " followed by the argument

const greet = (name = 'you') => {
  return `Hi, ${name}!`;
};

console.log(greet());
