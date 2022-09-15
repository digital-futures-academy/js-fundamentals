
let student = new Student('marta');
student.capitalisedName(); //'Marta'

class student { //class initiated
    constructor(name) { //name property declared 
        this.name = name; // ??
    } capitalisedName() { // function method declared
        return this.name.charAt(0).toUpperCase() + this.name.slice(1) // 
    }
} // pick out and capitalize the character at index 0 then join it with the rest of the index 