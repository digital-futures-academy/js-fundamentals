function CapitaliseWord(string) {
    // capitalise a single-word string
    if (typeof string === "string" && string != "") {
        // can't call .toUpperCase() method unless argument is a non-empty string
        return string[0].toUpperCase() + string.slice(1);
    } else return string;
}

function CapitalisePhrase(phrase) {
    if (typeof phrase === "string" && phrase != "") {
        // can't call .split() method on empty or non-string
        return phrase.split(' ').map(CapitaliseWord).join(' ');
    } else throw new Error("Value passed must be a non-empty string.");
    // This is my first time throwing an error! Woo
}


function Student(name) {
    // A constructor function for the Student class.
    this.name = name;
    this.capitalisedName = () => CapitalisePhrase(this.name);
}

let student = new Student("india may");
console.log(student.capitalisedName());

// Below gives an error:
// let nonStringStudent = new Student(7);
// console.log(nonStringStudent.capitalisedName());

// Likewise for:
// let emptyStudent = new Student("");
// console.log(emptyStudent.capitalisedName());