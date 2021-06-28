let student = new Student("asia")
student.capitalisedName()

class Student {
    constructor(name){
        this.name = name

    }
    capitalize(){
        this.name[0].toUpperCase()
    }
}

let student = new Student("asia")
student.capitalisedName()
