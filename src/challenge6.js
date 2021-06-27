const fs = require('fs')
const filePath = './tableofvalues/character_set.txt'

// Save the contents of the text file as a string
let x = fs.readFileSync(filePath, 'utf8')

// Doctor the string to make it easier to manipulate
x = x.replace(/\n/g, '')
x = x.substring(16)

dictionary = {}
counter = 0

// Build a dictionary associating the characters with the number that must replace them
for (let i = 0; i< x.length; i++) {
	if (x[i]===',' && x[i+1] != ',') {
		counter += 1
		dictionary[x[i-1]] = counter.toString()
	}
}


// The function that replaces each character in a sentence with it's number
const replace = (sentence, dictionary) => {
	result = ''
	for (let i = 0; i< sentence.length; i++){
		console.log(dictionary[sentence[i]])
		result += dictionary[sentence[i]]
	}
	return result
}

console.log(replace('Hi, Ed!',dictionary))
