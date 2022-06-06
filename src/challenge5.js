

class Student {

    constructor(name) {
        this.name = name
    }; capital() {
        let newName = this.name.toString().charAt(0).toUpperCase() + this.name.slice(1)
        console.log(newName)


    }
}
const student1 = new Student('amy')
student1.capital();
