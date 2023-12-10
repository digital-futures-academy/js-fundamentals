 class Student{
constructor(name){
    this.name=name
}
capitalisedName(){
    return this.name.toUpperCase()
}
}

let student=new Student('asia')
console.log(student.capitalisedName())