class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        const firstCapital = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        return firstCapital;
    }
};
//firstCapital = this takes the first letter of the word and makes it capital 
//+ add to it the rest of the word as it was. 

let student = new Student('marta');
student.capitalisedName(); //'Marta'
