/*
    Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

    ```js
    let student = new Student("asia")
    student.capitalisedName() // "Asia"
```
*/

class Student {
    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        const strStart = this.name.charAt(0).toUpperCase()
        const strRem = this.name.slice(1)
        return strStart + strRem
    }

}

let student = new Student("asia");
console.log(student.capitalisedName());