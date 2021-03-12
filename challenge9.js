let dictionary = {

" ": 1,

"a": 2,

"b": 3,

"c": 4,

"d": 5,

"e": 6,

"f": 7,

"g": 8,

"h": 9,

"i": 10,

"j": 11,

"k": 12,

"l": 13,

"m": 14,

"n": 15,

"o": 16,

"p": 17,

"q": 18,

"r": 19,

"s": 20,

"t": 21,

"u": 22,

"v": 23,

"w": 24,

"x": 25,

"y": 26,

"z": 27,

"A": 28,
	"B": 29,
	"C": 30,
	"D": 31,
	"E": 32,
	"F": 33,
	"G": 34,
	"H": 35,
	"I": 36,
	"J": 37,
	"K": 38,
	"L": 39,
	"M": 40,
	"N": 41,
	"O": 42,
	"P": 43,
	"Q": 44,
	"R": 45,
	"S": 46,
	"T": 47,
	"U": 48,
	"V": 49,
	"W": 50,
	"X": 51,
	"Y": 52,
	"Z": 53,
	"!": 54,
	"@": 55,
	"£": 56,
	"$": 57,
	"%": 58,
	"^": 59,
	"&": 60,
	"*": 61,
	"(": 62,
	")": 63,
	"-": 64,
	"_": 65,
	"=": 66,
	"+": 67,
	"[": 68,
	"]": 69,
	"{": 70,
	"}": 71,
	";": 72,
	":": 73,
	" ' ": 74,
	' " ': 75,
	"\\": 76,
	"|": 77,
	",": 78,
	".": 79,
	"<": 80,
	">": 81,
	"/": 82,
	"?": 83,
	"`": 84,
	"~": 85,
	"§": 86,
	"±": 87,
	"1": 88,
	"2": 89,
	"3": 90,
	"4": 91,
	"5": 92,
	"6": 93,
	"7": 94,
	"8": 95,
	"9": 96,
	"0": 97,};

	letterDict = {' ': 'm', 'a': 'X', 'b': 'p', 'c': 'M', 'd': '*', 'e': 'D',
	'f': '3', 'g': '£', 'h': '§', 'i': 't', 'j': 'Y', 'k': 'y', 'l': '7', 'm': '.',
	'n': 'w', 'o': '!', 'p': '%', 'q': 'g', 'r': 'A', 's': 'u', 't': '2', 'u': 'J',
	'v': '9', 'w': '_', 'x': '@', 'y': '[', 'z': 'L', 'A': 'h', 'B': 'q', 'C': '0',
	'D': 'G', 'E': 'j', 'F': '^', 'G': 'Z', 'H': ']', 'I': 'I', 'J': '|', 'K': '>',
	'L': 'B', 'M': 'c', 'N': 'i', 'O': 'e', 'P': ';', 'Q': '~', 'R': ':', 'S': 'P',
	'T': '±', 'U': 'k', 'V': 'S', 'W': '&', 'X': '+', 'Y': 'l', 'Z': 'a', '!':' ',
	'@': 'R', '£': ':', '$': '}', '%': 'n', '^': 'z', '&': 'F', '*': '8', '(': 'C',
	')': '-', '-': '?', '_': 'x', '=': '5', '+': 'U', '[': 'K', ']': 'v', '{': '=',
	'}': '<', ';': '1', ':': 'd', "'": '{', '"': 'N', '\\': 'O', '|': 'b', ',': '$',
	'.': 'Q', '<': 'H', '>': '(', '/': '\\', '?': '4', '`': ')', '~': 's', '§': '6',
	'±': 'V', '1': 'o', '2': 'W', '3': '"', '4': 'E', '5': "'", '6': 'r', '7': '/',
	'8': '`', '9': 'f', '0': 'T'};


	class letterNumber {
		constructor(ciphertext, key) {
			this.ciphertext = ciphertext;
			this.numberArr = this.ciphertext.match(/.{1,2}/g);
			this.key = key;
			this.numArr = [];
			this.decodedString = "";
			this.charSet;
			this.pair;
		}

		initialDecrypt() {
			for (let i = 0; i< this.numberArr.length; i++) {
				let num = parseInt(this.numberArr[i]) - this.key
				while(num<0) {
					num+=99}
				this.numArr.push(num)}
				return this.numArr
				}

				decrypt() {
					this.initialDecrypt()
					for (let i=0; i<this.numArr.length; i++){
						for (var [key, value] of Object.entries(dictionary)) {
						if (value === this.numArr[i]) {
							this.decodedString = this.decodedString + key}}}
					return this.decodedString
			}
	}




	class letterLetter {
		constructor(ciphertext) {
			this.ciphertext = ciphertext.split("");
			this.decodedString = "";
		}

		decrypt() {
			for (let i=0; i<this.ciphertext.length; i++){
				for (var [key, value] of Object.entries(letterDict)) {
				if (value === this.ciphertext[i]) {
					this.decodedString = this.decodedString + key}}}
			return this.decodedString
	}
		}


let newletterLetter = new letterLetter("B!!ym!9DAm2§DAD")
console.log(newletterLetter.decrypt())
