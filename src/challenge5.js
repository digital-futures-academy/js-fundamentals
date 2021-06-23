class Student {
	constructor(name){
	this._name = name;
	}
	get name(){
    return this._name;
	}
  capitalise(name){
    const str = name.toLowerCase()
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
}