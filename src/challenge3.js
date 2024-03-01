/*
#### Requirements
Same as Challenge 2 - this time use an arrow function
*/

const greet = (name) => `Hi, ${name}!`;

const tests = [
  {
    args: ["Ben"],
    expected: "Hi, Ben!",
  },
  {
    args: [],
    expected: "Hi, undefined!",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}
runTests(greet, tests);
