class Student {
  _firstName;
  constructor(firstName) {
    this._firstName = firstName;
  }

  capitalisedName() {
    return `${this._firstName[0].toUpperCase()}${this._firstName
      .slice(1)
      .toLowerCase()}`;
  }
}
