#### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(name)
    this._name = name;
}

capitalisedName(name) {
    return name.toUpperCase();
}
```js
let student = new Student("asia")
student.capitalisedName() // "Asia"
```
