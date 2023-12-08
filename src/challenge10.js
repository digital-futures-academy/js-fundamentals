const fs = require('fs');
const { LetterNumberCipher, LetterLetterCipher } = require('./your_cipher_implementation'); // Import your cipher implementation

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('Usage: cipher.js [cipher] [method] [file] [key]');
  process.exit(1);
}

const cipherType = args[0];
const method = args[1];
const inputFile = args[2];
const key = args[3];

// Read the content of the input file
const inputText = fs.readFileSync(inputFile, 'utf8');

// Initialize the appropriate cipher based on the provided cipherType
let cipher;
if (cipherType === 'ln') {
  cipher = new LetterNumberCipher(/* Add necessary parameters if required */);
} else if (cipherType === 'll') {
  cipher = new LetterLetterCipher(/* Add necessary parameters if required */);
} else {
  console.error('Invalid cipher type. Supported types: ln, ll');
  process.exit(1);
}

// Perform encryption or decryption based on the provided method
let result;
if (method === 'enc') {
  if (!key) {
    console.error('Encryption requires a key.');
    process.exit(1);
  }
  result = cipher.encrypt(inputText, parseInt(key, 10));
} else if (method === 'dec') {
  result = cipher.decrypt(inputText, parseInt(key, 10));
} else {
  console.error('Invalid method. Supported methods: enc, dec');
  process.exit(1);
}

// Generate the output file name
const outputFile = `${inputFile}.${method}`;

// Write the result to the output file
fs.writeFileSync(outputFile, result, 'utf8');

console.log(`Operation completed. Output written to ${outputFile}`);



// To run the script:

// Save the above code in a file named cipher.js.
// Make the script executable (Linux/Mac):
// sh
// Copy code
// chmod +x cipher.js
// Run the script with the desired command, for example:
// sh
// Copy code
// ./cipher.js ll enc example.txt
// or
// sh
// Copy code
// cipher ln enc example.txt 104