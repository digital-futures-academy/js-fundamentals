const fs = require('fs')
const filePath = 'C:/Users/Richard/Desktop/JavaScript/df/js-funamentals/js-fundamentals/challenges/tableofvalues/character_set.txt'

// Save the contents of the text file as a string
let text = fs.readFileSync(filePath, 'utf8')


class LetterNumber {
	constructor (text){
		this.text = text.replace(/\n/g, '').substring(16)
		this.dict = {}
	}
	// Using the num that the encryption must be ofset by, build 
	// a dictionary pointing characters to numbers
	buildDict(num, useOfThisDictionary) {
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
				if (useOfThisDictionary === 'encrypt') {
					this.dict[this.text[i-1]] = encryptionValue
				} else {
					this.dict[encryptionValue] = this.text[i-1]
				}
				
			}
		}
	}

	// Accept a string and a num, Return the encryption of the string
	encrypt(sentence, num) {
		this.buildDict(num, 'encrypt')
		let result = ''
		for (let i = 0; i< sentence.length; i++){
			result += this.dict[sentence[i]]
		}
		return result
	}
	// Accept an encrypted string, Return the original string
	decrypt(encryptedSentence, num) {
		this.buildDict(num, 'decrypt')
		let result = ''
		for (let i = 0; i< encryptedSentence.length/2; i++){
			let x = encryptedSentence.charAt(2*i) + encryptedSentence.charAt(2*i+1)
			result += this.dict[x]
		}
		return result
	}
}

letterNumber = new LetterNumber(text)

console.log(letterNumber.decrypt('0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025', 4771))
console.log(letterNumber.decrypt('21774590777279878686737286777776729287727587857772938872958192807273728677957287867750', 4771))
console.log(letterNumber.decrypt('0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225', 4771))