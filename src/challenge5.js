class Student {
     constructor(name) {
         this._name = name;
     }

     capitalisedName() {
         this._name = this._name[0].toUpperCase() + this._name.slice(1);
     }
 }


let student1 = new Student("asia")
console.log( student1.capitalisedName() ) // "Asia"

let student2 = new Student("India")
console.log(student2.capitalisedName()) // "India"
