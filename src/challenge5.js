class Student {
  _firstName;
  constructor(firstName) {
    this._firstName = firstName;
  }

  capitalisedName() {
    return `${this._firstName[0].toUpperCase()}${this._firstName
      .slice(1)
      .toLowerCase()}`;
  }
}

const tests = [
  {
    args: [new Student("asia")],
    expected: "Asia",
  },
  {
    args: [new Student("BeNjAmIN")],
    expected: "Benjamin",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}
runTests((student) => student.capitalisedName(), tests);
