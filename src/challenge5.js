/*
#### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

```js
let student = new Student("asia")
student.capitalisedName() // "Asia"
```
*/

class Student {

    name;

    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        console.log(this.name[0].toUpperCase() + this.name.substring(1));
    };

};

let student1 = new Student("asia");
student1.capitalisedName(); // "Asia"

let student2 = new Student("shaf");
student2.capitalisedName();







