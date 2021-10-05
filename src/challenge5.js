/* Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

```js
let student = new Student("asia")
student.capitalisedName() // "Asia"
```*/

class Student {
  constructor(name) {
    this.name = name;
  }
}
function capitalizedName() {
  let student = new Student("asia");
  return student.name[0].toUpperCase() + student.name.substring(1);
}

console.log(capitalizedName());
