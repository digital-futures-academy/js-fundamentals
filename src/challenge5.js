class Student {
    constructor(name){
        this.name = name;
    }
    get capitalizedName ()  {
        return (""+this.name).toUpperCase();
    }
}

let student = new Student("dan");
console.log(student.capitalizedName); // Outputs DAN