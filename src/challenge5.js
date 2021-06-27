class Student {
	constructor(name) {
		this.name = name
	}

	capitalisedName() {
		return this.name[0].toUpperCase() + this.name.slice(1,)
	}
}

pupil1 = new Student('richard')

console.log(pupil1.capitalisedName())