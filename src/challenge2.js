/*
#### Requirements
Declare a `function` called `greet` that has 1 argument called `name` 
and returns a String `"Hi, <name>!"`
*/
function greet(name) {
  return `Hi, ${name}!`;
}

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
