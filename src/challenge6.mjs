import letterNumberMap from "./utils/letterNumberMap.mjs";

function encrypt(letterNumberMap, str) {
  return str
    .split("")
    .map((char) =>
      letterNumberMap.hasOwnProperty(char) ? letterNumberMap[char] : ""
    )
    .join("");
}

const tests = [
  {
    args: [letterNumberMap, "E"],
    expected: "32",
  },
  {
    args: [letterNumberMap, "d"],
    expected: "5",
  },
  {
    args: [letterNumberMap, "Ed"],
    expected: "325",
  },
  {
    args: [letterNumberMap, "Hi, Ed!"],
    expected: "351078132554",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}
runTests(encrypt, tests);
