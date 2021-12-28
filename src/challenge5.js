function CapitaliseWord(string) {
    // capitalise a single-word string
    if (typeof string === "string" && string != "") {
        // can't call .toUpperCase() method unless argument is a non-empty string
        return string[0].toUpperCase() + string.slice(1);
    } else return "";
}

function CapitalisePhrase(phrase) {
    if (typeof phrase === "string" && phrase != "") {
        // can't call .split() method on empty or non-string
        return phrase.split(' ').map(CapitaliseWord).join(' ');
    } else throw new Error("String passed must not be empty.");
    // This is my first time throwing an error! Woo
}


function Student(name) {
    // A constructor function for the Student class.
    this.name = name;
    this.capitalisedName = () => CapitalisePhrase(this.name);
}

let student = new Student("india may");
console.log(student.capitalisedName());

let emptyStudent = new Student("");
// Below gives an error:
// console.log(emptyStudent.capitalisedName());