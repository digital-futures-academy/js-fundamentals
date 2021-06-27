class Student {
  constructor(name) {
    this._name = name;  
  }
  
  capitalised() { 
     
    console.log(this._name.charAt(0).toUpperCase()+ this._name.slice(1));
  }
 
}

const noCaps = new Student("asia");
noCaps.capitalised();



