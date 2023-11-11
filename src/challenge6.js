// #### Requirements
// I want to be able to encrypt a string using letter-number
// substitution according to this [table of values]
// (https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
// ```
// "E" -> "32"
// "d" -> "5"
// "Ed" -> "325"
// "Hi, Ed!" -> "351078132554"
// ```

// Use your best judgment with your pair partner.
// If you want clarification, ask your coach.
const replacements = {
  a: "2",
  b: "3",
  c: "4",
  d: "5",
  e: "6",
  E: "32",
  d: "5",
  H: "35",
  i: "10",
  "!": "54",
  ",": "78",
  " ": "1",
};

const str = "Hi, Ed!";
const input = str.split("");
console.log(input);

const output = input.map((inputPhrase) => replacements[inputPhrase]);
const outputMod = output.toString(); //turning into array
console.log(outputMod); //testing
const outputReplace = outputMod.replaceAll(",", ""); //removing all the ","
console.log(outputReplace); //testing
