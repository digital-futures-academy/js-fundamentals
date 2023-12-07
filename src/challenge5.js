/*
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.
*/

class Student {

    constructor(name) {

        this.name = name;

    }


    capitalisedName() {

        let name = this.name;

        //Take uppercase of first character of the name
        let capitalFirstLetter = name.charAt(0).toUpperCase();

        //Take all but first letter of the name
        let remainingLetters = name.slice(1);

        //Construct, log, and return the capitalised name
        let uppercaseName = capitalFirstLetter + remainingLetters;
        console.log(uppercaseName);
        return uppercaseName;

    }


}

//Create new student object with the name "asia"
let student = new Student("asia");
student.capitalisedName(); // "Asia"

