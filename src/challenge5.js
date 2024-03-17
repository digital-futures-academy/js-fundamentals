class Student{
    constructor(name){
        this.name = name;
    }

    capitalisedName(){
        console.log(this.name[0].toUpperCase() + this.name.slice(1)) ;
    }
}

let student = new Student("asia")
student.capitalisedName() // "Asia"