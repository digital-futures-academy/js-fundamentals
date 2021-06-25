// Read in a csv file named character_set.csv 
//Load in the node csv module 
//More info about the csv can be found here https://csv.js.org/parse/api/callback/

const parse = require('csv-parse');
const fs = require('fs');


// Create an empty csv object
//const charObj = csv();

// Open the data from an external csv and allow it to be read. 
const file = fs.readFile('character_set.csv', 'utf8', function(err,data){
    if (err) {
        return console.error(err);
    }
    console.log("File opened!");
    //console.log(data);
    ;
});

//Alternative method using a readable stream
// Define parser
const charObj = {};

// Callback API
const parser = parse('character_set.csv', 
    // Options to control the parsing
    {delimiter: ',', columns: true, from_line: 1}, 
    // Callback function
    function(err, records) {
        if (err) {
            return console.error(err);
        }
        console.log('Callback works!');
        console.log(records)

        //console.log(records);
    }
);

//Streaming API
const parserStream = parse('character_set.csv',{
    delimiter: ',', 
    columns: true, 
    from_line: 1 
})

// Use the readable stream api
const output = {};

parserStream.on('readable', function () {
    let record
    while (record = parserStream.read()) {
        output.push(record)
        console.log(`Output ${record}`)
    }
})

console.log(output);

// Create empty object literal


/*parser.on('readable', function () {
    let obj
    while (obj = parser.read()) {
        charObj.push(obj);
    };
*/

//const fileStream = fs.createReadStream('character_set.csv');


//Create the parser 
/* See here for more details https://csv.js.org/parse/api/stream/ */

// Code after the object literal has been created 

sampleObj = {a:2, b:3, c:4};

const encode = strObj => {
    const strArr = strObj.split('');
    //console.log(strArr)
    const encodeStrObj = strArr.map(str => sampleObj[str]);
    //console.log(encodeStrObj)
    return encodeStrObj.join('');
};

//Example 
myName = 'abc';
console.log(myName);
console.log(encode(myName));