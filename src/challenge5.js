
class Student {
	constructor(name) {
		this.name = name;
	}

	capitalisedName() {
		// ensures that a capitalised name is returned
		// no matter how the input string is capitalised.
		this.name = this.name.toLowerCase();

		// strings are immutable so we turn the string into an array to modify it
		let arr = this.name.split('');

		// modify the first char of our arr in place
		arr[0] = arr[0].toUpperCase();

		// convert back to string
		this.name = arr.join('');

		return this.name;
	}
}