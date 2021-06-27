const fs = require('fs')
const filePath = './tableofvalues/character_set.txt'

// Save the contents of the text file as a string
let text = fs.readFileSync(filePath, 'utf8')


class LetterNumber {
	constructor (text){
		this.text = text.replace(/\n/g, '').substring(16)
		this.dict = {}
	}
	// Using the num that the encryption must be ofset by, build 
	// a dictionary pointing characters to numbers
	buildDict(num) {
		let counter = num
		for (let i = 0; i< this.text.length; i++) {
			if (this.text[i]===',' && this.text[i+1] != ',') {
				counter += 1
				let encryptionValue = counter % 100
				// Add a leading 0 if needed, and convert the typeof from number to string
				if (encryptionValue < 10) {
					encryptionValue = '0' + encryptionValue.toString()
				} else {
					encryptionValue = encryptionValue.toString()
				}
				// Add an entry to the dictionary
				this.dict[this.text[i-1]] = encryptionValue
			}
		}
	}
	// Accept a string and a num, Return the encryption of the string
	encrypt(sentence, num) {
		this.buildDict(num)
		let result = ''
		for (let i = 0; i< sentence.length; i++){
			result += this.dict[sentence[i]]
		}
		return result
	}
	
}

letterNumber = new LetterNumber(text)

console.log(letterNumber.encrypt('Hi, Ed!', 302))