const fs = require('fs')
const filePath = './tableofvalues/character_set2.txt'

// Save the contents of the text file as a string
let text = fs.readFileSync(filePath, 'utf8')


class LetterLetter {
	constructor (text){
		this.text = text.replace(/\n/g, '').substring(16)
		this.dict = {}
	}
	// Using the num that the encryption must be ofset by, build 
	// a dictionary pointing characters to numbers
	buildDict(useOfThisDictionary) {
		for (let i = 0; i< this.text.length; i++) {
			if (this.text[i]===',' && this.text[i+1] != ',') {
		
				// Add an entry to the dictionary
				if (useOfThisDictionary === 'encrypt') {
					this.dict[this.text[i-1]] = this.text[i+2]
				} else {
					this.dict[this.text[i+2]] = this.text[i-1]
				}
				
			}
		}
	}

	// Accept a string, Return the encryption of the string
	encrypt(sentence) {
		this.buildDict('encrypt')
		let result = ''
		for (let i = 0; i< sentence.length; i++){
			result += this.dict[sentence[i]]
		}
		return result
	}
	// Accept an encrypted string, Return the original string
	decrypt(encryptedSentence) {
		this.buildDict('decrypt')
		let result = ''
		for (let i = 0; i< encryptedSentence.length; i++){
			result += this.dict[encryptedSentence[i]]
		}
		return result
	}
}

letterLetter = new LetterLetter(text)

console.log(letterLetter.decrypt('B!!ym!9DAm2§DAD '))
console.log(letterLetter.encrypt('Look over there!'))
console.log(letterLetter.decrypt(letterLetter.encrypt('I wonder if this will work????')))