class student{
    constructor (name){
        this.name=name
    }

    capitalize(){
        return this.name[0].toUpperCase()+ this.name.slice(1)
    }
}

let student_1=new student("ed withers")

console.log(student_1.capitalize())