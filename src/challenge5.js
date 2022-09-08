/**
 #### Requirements
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
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}

let student = new Student("usia")
student.capitalisedName();
console.log(student.name);
