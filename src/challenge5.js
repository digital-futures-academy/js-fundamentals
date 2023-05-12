class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName() {
    const capitalisedName = this.name[0].toUpperCase() + this.name.slice(1);
    return capitalisedName ;
  }
}
