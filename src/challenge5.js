class Student{
    constructor(name){
        this.name=name
    }

    capitalise(){
        return this.name[0].toUpperCase()+this.name.substr(1)
    }
}

let student= new Student('lewis')
console.log(student.capitalise())
