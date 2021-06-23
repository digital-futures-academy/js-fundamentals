class student{
    constructor(name){
        this._name = name;
    }
    capitalisedName(){
        const newName = this._name; 
        newName[0] = newName.charAt(0).toUpperCase();
        return newName; 
    }
}