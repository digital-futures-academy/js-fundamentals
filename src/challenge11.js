
const fs = require('fs').promises;

class Cipher {
    constructor(charSet) {
        this.charSet = charSet;//cipher file
       
    }
   

    async buildLookup(key) {
        try {
            const data = await fs.readFile(this.charSet, 'utf-8');
            const array = data.split('\n');
            const lookup = {};
            array.forEach((char, index) => {


                lookup[char[0]] = 
                array.every((element) => Number.isInteger(+element.split(', ')[1]))
                // if all substitutions in given charset are numbers, pad with 0s
                ?array[(index+key)%array.length].split(', ')[1].toString().padStart(2,'0')
                :array[(index+key)%array.length].split(', ')[1];
            })
          
          
            return lookup;
        }
        catch (err) {
            console.log(err);
            return;

        }
    }
    async encode(fileName,key) {
         console.log(`encoding ${fileName} using key ${key}`);
        try {
            const lookup = await this.buildLookup(key);

            const data = await fs.readFile(fileName, 'utf-8');
            const array = data.split('');
            const result = array.map(char => lookup[char]).join('');
            await fs.writeFile(`${fileName}.enc`, result);
            console.log(`File successfully encoded as ${fileName}.enc`);
            return;
        } catch (err) {
            console.log(err);
            return;
        }
    }

    async decode(fileName, key) {
      console.log(`decoding ${fileName} using key ${key}`)
        try {
            const lookup = await this.buildLookup(key);
             if (Object.values(lookup).length != 97) {
               console.log("Charset must contain 97 characters");

               return;
             }
            const data = await fs.readFile(fileName, 'utf-8');
          
            let array = data.split('');
            //if all substitutions in given charset are numbers, reconfigure array to be 2 digits per element
            if (Object.values(lookup).every((element) => Number.isInteger(+element))) {

                array = array.join('').match(/.{1,2}/g);
            }
            const result = array.map(char => {
                for (const key in lookup) {
                    if (lookup[key] === char) {
                        return key;
                    }
                }
            }).join('');
            await fs.writeFile(`${fileName.substring(0,fileName.indexOf(".enc"))}`, result);
            console.log(`File successfully decoded as ${fileName.substring(0, fileName.indexOf(".enc"))}`);
            return;
        } catch (err) {
            console.log(err);
            return;
        }
    }
}

//usage - create new instance of Cipher class
//e.g. const myCipher = new Cipher(charSet, fileName, key);

// const numCipher = new Cipher(`./data/charNum.txt`);
// numCipher
//   .encode("../example.txt", 10005)
//   .then(() => numCipher.decode("../example.txt.enc", 10005))
//   .then(() => {
//     const charCipher = new Cipher(`./data/charChar.txt`);
//     charCipher
//       .encode("../example.txt", 10096)
//       .then(() => charCipher.decode("../example.txt.enc", 10096));
//   });

module.exports = Cipher;