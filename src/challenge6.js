
//I don't have a pair partner so I developed the solution below by myself

//Import module for file reading
const fs = require('fs');

encryptString = (string) => {
    let encryptedString = '';

    //Read the file (character_set.txt) stored within the Files folder
    fs.readFile('C:/Users/kosi5/DigitalFutures/js-fundamentals/Files/character_set.txt', 'utf8', (err, data) => {
        //If an error is found return it
        if (err) {
            console.log(err);
            return;
        }

        //Split the contents of the file by new lines and initialise the required variables
        data = data.split('\n');
        let letter;
        let val;

        //Outer loop: extract each letter from the string
        for (let i = 0; i < string.length; i++) {
            letter = string[i];

            /*For each line, if the character matches the letter,
            determine it's corresponding value*/ 
            for (let line = 1; line < data.length; line++) {
                if (data[line][0] === letter) {
                    if (data[line][4] !== undefined) {
                        val = data[line][3] + data[line][4];
                    } else {
                        val = data[line][3];
                    }
                    /*Append the value to encryptedString and then break
                    out of the loop*/
                    encryptedString += val;
                    break;
                }
            }
        }
        //Display the encrypted string
        console.log('Encrypted String: ' + encryptedString);
    })
}

encryptString('Hi, Ed!');