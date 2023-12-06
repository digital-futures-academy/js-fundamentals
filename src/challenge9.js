const axios = require("axios");


const getLetterCipherText = () => {
  return axios
    .get(
      "https://gist.githubusercontent.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a/raw/f74b2bdfbe1d69215ccd02e7a7ea7232fc8b6747/character_set2.txt"
    )
      .then((response) => {
        // console.log(response.data)
      return response.data;
    });
};

const getNumberCipherText = () => {
  return axios
    .get(
      "https://gist.githubusercontent.com/dearshrewdwit/691c71616995ad2430ab309aa9998745/raw/78624a6c9499e049fd294ddb8302d93e6f675a0d/character_set.txt"
    )
    .then((response) => {
      return response.data;
    });
};

const buildLookup = (type) => {
  if (type === "number") {
    return getNumberCipherText().then((data) => {
      const array = data.split("\n");

      const lookup = {};
      for (let i = 1; i < array.length; i++) {
        if (array[i][0] === ",") {
          lookup[array[i][0]] = array[i]
            .split(",")
            .filter((element) => Number.isInteger(+element))
            .join("")
            .trim();
        } else {
          lookup[array[i].split(",")[0]] = array[i].split(",")[1].trim();
        }
      }

      return lookup;
    });
  } else {
      return getLetterCipherText().then((data) => {
   
          const array = data.split("\n");

          const lookup = {};
          //array.length-1 to remove the last empty line
      for (let i = 1; i < array.length-1; i++) {
          if (array[i][0] === ",") {
              lookup[array[i][0]] = array[i][3]
          
          } else if (array[i][3] === ",") {
              lookup[array[i][0]] = array[i][3]
        } else {
           
          lookup[array[i].split(",")[0]] = array[i].split(",")[1][1];//
        }
      }

      return lookup;
    });
  }
};


class LetterNumber {
  encryptAsync(string, offset) {
    return buildLookup("number").then((lookup) => {
      const array = string.split("");
      let encrypted = "";
      array.forEach((char) => {
        let code = +lookup[char] + offset;
        if (code > 99) {
          code = code % 100;
        }
        encrypted += code.toString().padStart(2, "0");
      });

      return encrypted;
    });
  }

  decryptAsync(string, key) {
    return buildLookup("number").then((lookup) => {
      const array = [];
      for (let i = 0; i < string.length; i += 2) {
        array.push(+string.substring(i, i + 2));
      }

      let decrypted = "";
      array.forEach((code) => {
        code -= key % 100;
        if (code < 0) {
          code += 100;
        }

        decrypted += Object.keys(lookup).find(
          (key) => lookup[key] === code.toString()
        );
      });

      return decrypted;
    });
  }
}

class LetterLetter {
  encryptAsync(string) {
      return buildLookup("letter").then((lookup) => {
      
        let encrypted = "";
        for(let i=0;i<string.length;i++){
      
     
        encrypted +=lookup[string[i]];
      };

      return encrypted;
    });
  }

  decryptAsync(string) {
      return buildLookup("letter").then((lookup) => {
      let decrypted = "";
      for (let i = 0; i < string.length; i += 1) {
        decrypted += Object.keys(lookup).find(
          key => lookup[key] === string[i]);
      };

      return decrypted;
    });
  }
}
module.exports = { LetterNumber,LetterLetter };

 