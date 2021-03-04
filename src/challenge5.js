class Student{
    constructor(name){
        this.name = name;
    }
    capitalisedName(){
        let firstletter = this.name.substring(0,1).toUpperCase();
        let restofname = this.name.substring(1);
        return firstletter + restofname; 
    }
}
let student = new Student('ed');
console.log(student.capitalisedName());
