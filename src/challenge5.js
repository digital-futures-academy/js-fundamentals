class Student {

    capitalisedName(name){

        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

let student = new Student();
console.log(student.capitalisedName("asia"));