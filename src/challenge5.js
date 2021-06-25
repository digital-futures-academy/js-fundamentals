
class Student
{ 
    //Constructor taking one element and setting the name of the Student class.
    constructor(name){
        this.name = name;
    }
    //Method capitalising the first letter of name of the student class
    capitalisedName (){ 
        this.name =  this.name[0].toUpperCase() + this.name.slice(1);
    }
}
