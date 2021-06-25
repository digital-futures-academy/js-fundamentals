// Read in a csv file named character_set.csv 
//Load in the node csv module 
//More info about the csv can be found here https://csv.js.org/parse/api/callback/

const parse = require('csv-parse');
const fs = require('fs');

// Create an empty csv object
//const charObj = csv();

// Open the data from an external and allow it to be read from. 
const file = fs.readFile('character_set.csv', 'utf8', function(err,data){
    if (err) {
        return console.error(err);
    }
    console.log("File opened!!");
    console.log(data);
    ;
})

//Create the parser 
// See here for more details https://csv.js.org/parse/api/stream/

const output = []
// Create the parser
const parser = parse({
    delimiter: ','
})
