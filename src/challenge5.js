class Student {
  constructor(name) {
    this.name = name;
  }
   capitalisedName(name) {
    console.log( name.charAt(0).toUpperCase() + name.slice(1));
  }
}

let student = new Student("lucy");
student.capitalisedName("lucy"); 
