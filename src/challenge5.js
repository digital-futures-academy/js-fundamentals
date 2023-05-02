/*
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

```js
let student = new Student("asia")
student.capitalisedName() // "Asia"
```
*/

class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    capitalisedName() {
        return this._name.replace(/./, c => c.toUpperCase());
    }
}

let student = new Student("asia");
console.log(student.capitalisedName());
console.log(student.name);