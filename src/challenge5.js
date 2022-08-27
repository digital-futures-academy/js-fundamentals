class Students{
    constructor(name){
        this.name = name;
    }
    capitalisedName(){
        let format_name = this.name[0].toUpperCase() + this.name.substring(1);
        return format_name;
    }
}

let student = new Students("asia")
console.log(student.capitalisedName())