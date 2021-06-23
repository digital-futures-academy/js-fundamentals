

class Student {
constructor (name){
    this.name = name;
}
getCapitalisedName(){
    return this.name[0] .toUpperCase() + this.name.slice(1);
}
}
let student = new Student ("asia");
console.log(student.getCapitalisedName());

