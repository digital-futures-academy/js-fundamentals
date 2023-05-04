const fs = require('fs'); // requireing file System library
const { greet } = require('./challenge1') // requiring greet() from challenge 1


// Reading from text file challenge6.txt and throws an error if fiel not found
const fileData = fs.readFileSync('./challenge6.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  return data
})

// dataObjectConverter coverst the data into a data object, which splits on newline \n and returns a data object
const dataObjectConverter = (data) => {
  const charSetObject = {};
  const dataArray = data.split('\n');
  dataArray.forEach((charSet) => {
    // cused conditional here as it was reading the empty last line that was giving an undefined value in the data object
    if (charSet.length > 1) {
      charSetObject[charSet.split(', ')[0]] = charSet.split(', ')[1];
    }
  });
  return charSetObject;
}

// takes two functions a data object funtion a greet function and matches each letter of greeting to the characterSet
// and pushes the value to message array and returns as a string.
const encryptGreet = (dataObjFunc, greetFunc) => {
  const greeting = greetFunc();
  const message = [];
  const characterSet = dataObjFunc;
  for (const c of greeting) {
    message.push(characterSet[c])
  }
  return message.join('');
}

// calling the encryptGreet function with dataObjectConverter taking the fileData from the text file and greet function imported from challenge 1.
encryptGreet(dataObjectConverter(fileData), greet);
