/*Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

```js
let student = new Student("asia")
student.capitalisedName() // "Asia" */

class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        return this.name.toUpperCase()
    }
}
let student = new Student("matt")
student = student.capitalisedName()

console.log(student)