class LetterNumber {
    
    encrypt(plainTxt, cipherInt) { 

        let encryptedStr = ""; // String holds the ciphertext
        
        return encryptedStr = characterSet(plainTxt, cipherInt, encryptedStr);
    }   
}

/**
 * Checks for the value of the characters, add leading zeros when needed,
 * and concatenate the different values for the final ciphertext
 * @param {*} plainTxt 
 * @param {*} cipherInt 
 * @returns encryptedStr
 */
function characterSet(plainTxt, cipherInt, encryptedStr) {
    
    let num = 0; //Holds the value of the each character

    //Loops through each charachter of the String passed
    for(var i = 0; i < plainTxt.length; i++){
        //Menu to assign values to each character
        switch(plainTxt.charAt(i)){
            case " ":
                num = 1;
                break;
            case "a":
                num = 2;
                break;
            case "b":
                num = 3;
                break;
            case "c":
                num = 4;
                break;
            case "d":
                num = 5;
                break;
            case "e":
                num = 6;
                break;
            case "f":
                num = 7;
                break;
            case "g":
                num = 8;
                break;
            case "h":
                num = 9;
                break;
            case "i":
                num = 10;
                break;
            case "j": 
                num = 11;
                break;
            case "k":
                num = 12;
                break;
            case "l":
                num = 13;
                break;
            case "m":
                num = 14;
                break;
            case "n":
                num = 15;
                break;
            case "o":
                num = 16;
                break;
            case "p":
                num = 17;
                break;
            case "q":
                num = 18;
                break;
            case "r":
                num = 19;
                break;
            case "s":
                num = 20;
                break;
            case "t":
                num = 21;
                break;
            case "u":
                num = 22;
                break;
            case "v":
                num = 23;
                break;
            case "w":
                num = 24;
                break;
            case "x":
                num = 25;
                break;
            case "y":
                num = 26;
                break;
            case "z":
                num = 27;
                break;
            case "A":
                num = 28;
                break;
            case "B": 
                num = 29;
                break;
            case "C":
                num = 30;
                break;
            case "D": 
                num = 31;
                break;
            case "E": 
                num = 32;
                break;
            case "F":
                num = 33;
                break;
            case "G":
                num = 34;
                break;
            case "H": 
                num = 35;
                break;
            case "I":
                num = 36;
                break;
            case "J":
                num = 37;
                break;
            case "K":
                num = 38;
                break;
            case "L":
                num = 39;
                break;
            case "M":
                num = 40;
                break;
            case "N":
                num = 41;
                break;
            case "O":
                num = 42;
                break;
            case "P":
                num = 43;
                break;
            case "Q":
                num = 44;
                break;
            case "R":
                num = 45;
                break;
            case "S":
                num = 46;
                break;
            case "T":
                num = 47;
                break;
            case "U":
                num = 48;
                break;
            case "V":
                num = 49;
                break;
            case "W":
                num = 50;
                break;
            case "X":
                num = 51;
                break;
            case "Y":
                num = 52;
                break;
            case "Z":
                num = 53;
                break;
            case "!":
                num = 54;
                break;
            case "@":
                num = 55;
                break;
            case "£":
                num = 56;
                break;
            case "$":
                num = 57;
                break;
            case "%":
                num = 58;
                break;
            case "^":
                num = 59;
                break;
            case "&":
                num = 60;
                break;
            case "*":
                num = 61;
                break;
            case "(":
                num = 62;
                break;
            case ")":
                num = 63;
                break;
            case "-":
                num = 64;
                break;
            case "_":
                num = 65;
                break;
            case "=":
                num = 66;
                break;
            case "+":
                num = 67;
                break;
            case "[":
                num = 68;
                break;
            case "]":
                num = 69;
                break;
            case "{":
                num = 70;
                break;
            case "}":
                num = 71;
                break;
            case ";":
                num = 72;
                break;
            case ":":
                num = 73;
                break;
            case "'":
                num = 74;
                break;
            case "\"":
                num = 75;
                break;
            case "\\":
                num = 76;
                break;
            case "|":
                num = 77;
                break;
            case ",":
                num = 78;
                break;
            case ".":
                num = 79;
                break;
            case "<":
                num = 80;
                break;
            case ">":
                num = 81;
                break;
            case "/":
                num = 82;
                break;
            case "?":
                num = 83;
                break;
            case "\`":
                num = 84;
                break;
            case "~":
                num = 85;
                break;
            case "§":
                num = 86;
                break;
            case "±":
                num = 87;
                break;
            case "1":
                num = 88;
                break;
            case "2":
                num = 89;
                break;
            case "3":
                num = 90;
                break;
            case "4":
                num = 91;
                break;
            case "5":
                num = 92;
                break;
            case "6":
                num = 93;
                break;
            case "7":
                num = 94;
                break;
            case "8":
                num = 95;
                break;
            case "9":
                num = 96;
                break;
            case "0":
                num = 97
                break;

        }       
    
        num += cipherInt; //Sums the cipher value

        //Holds the cipher value of the character and calls reset function to keep the value under 100
        let encryptedInt = reset(num);

        //Holds the cipher value of the character as a String and calls the function to add 
        //a leading zero(if needed)
        encryptedChar = addLeadingZeros(encryptedInt, 2);
        
        //Holds the final cipher text concatenating the values of each character of the original string
        encryptedStr += encryptedChar;        
    }
   
    return encryptedStr;
}

/**
 * Checks if a leading zero if needed and parse the interger to a string
 * @param {*} num 
 * @param {*} totalLength 
 * @returns num as a string
 */
function addLeadingZeros(num, totalLength) {

    if(num < 10){

        let cipherNum = String(num).padStart(totalLength, '0');
        return cipherNum;
    }
    else{
        return String(num);
    }
  }

  /**
   * 
   * @param {*} num 
   * @returns num with a value under 100
   */
function reset(num) {

    while(num > 99){

        num -= 100;
    }

    return num;
}

let letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("a", 1)) // "03"
console.log(letterNumber.encrypt("Ed", 4)) // "3609"
console.log(letterNumber.encrypt("Hi, Ed!", 302)) // "37128003340756"