
class Student {
    constructor(name){
        this.name = name

    }
    capitalisedName(){
        return this.name[0].toUpperCase()+ this.name.slice(1)
    }
}

const student = new Student("petra")
console.log(student.capitalisedName())
