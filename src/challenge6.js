const encrypt = (str) => { 

    let encryptedStr = "";

    for(var i = 0; i <= str.length; i++){
        switch(str.charAt(i)){
            case " ":
                encryptedStr += "1";
                break;
            case "a":
                encryptedStr += "2";
                break;
            case "b":
                encryptedStr += "3";
                break;
            case "c":
                encryptedStr += "4";
                break;
            case "d":
                encryptedStr += "5";
                break;
            case "e":
                encryptedStr += "6";
                break;
            case "f":
                encryptedStr += "7";
                break;
            case "g":
                encryptedStr += "8";
                break;
            case "h":
                encryptedStr += "9";
                break;
            case "i":
                encryptedStr += "10";
                break;
            case "j": 
                encryptedStr += "11";
                break;
            case "k":
                encryptedStr += "12";
                break;
            case "l":
                encryptedStr += "13";
                break;
            case "m":
                encryptedStr += "14";
                break;
            case "n":
                encryptedStr += "15";
                break;
            case "o":
                encryptedStr += "16";
                break;
            case "p":
                encryptedStr += "17";
                break;
            case "q":
                encryptedStr += "18";
                break;
            case "r":
                encryptedStr += "19";
                break;
            case "s":
                encryptedStr += "20";
                break;
            case "t":
                encryptedStr += "21";
                break;
            case "u":
                encryptedStr += "22";
                break;
            case "v":
                encryptedStr += "23";
                break;
            case "w":
                encryptedStr += "24";
                break;
            case "x":
                encryptedStr += "25";
                break;
            case "y":
                encryptedStr += "26";
                break;
            case "z":
                encryptedStr += "27";
                break;
            case "A":
                encryptedStr += "28";
                break;
            case "B": 
                encryptedStr += "29";
                break;
            case "C":
                encryptedStr += "30";
                break;
            case "D": 
                encryptedStr += "31";
                break;
            case "E": 
                encryptedStr += "32";
                break;
            case "F":
                encryptedStr += "33";
                break;
            case "G":
                encryptedStr += "34";
                break;
            case "H": 
                encryptedStr += "35";
                break;
            case "I":
                encryptedStr += "36";
                break;
            case "J":
                encryptedStr += "37";
                break;
            case "K":
                encryptedStr += "38";
                break;
            case "L":
                encryptedStr += "39";
                break;
            case "M":
                encryptedStr += "40";
                break;
            case "N":
                encryptedStr += "41";
                break;
            case "O":
                encryptedStr += "42";
                break;
            case "P":
                encryptedStr += "43";
                break;
            case "Q":
                encryptedStr += "44";
                break;
            case "R":
                encryptedStr += "45";
                break;
            case "S":
                encryptedStr += "46";
                break;
            case "T":
                encryptedStr += "47";
                break;
            case "U":
                encryptedStr += "48";
                break;
            case "V":
                encryptedStr += "49";
                break;
            case "W":
                encryptedStr += "50";
                break;
            case "X":
                encryptedStr += "51";
                break;
            case "Y":
                encryptedStr += "52";
                break;
            case "Z":
                encryptedStr += "53";
                break;
            case "!":
                encryptedStr += "54";
                break;
            case "@":
                encryptedStr += "55";
                break;
            case "£":
                encryptedStr += "56";
                break;
            case "$":
                encryptedStr += "57";
                break;
            case "%":
                encryptedStr += "58";
                break;
            case "^":
                encryptedStr += "59";
                break;
            case "&":
                encryptedStr += "60";
                break;
            case "*":
                encryptedStr += "61";
                break;
            case "(":
                encryptedStr += "62";
                break;
            case ")":
                encryptedStr += "63";
                break;
            case "-":
                encryptedStr += "64";
                break;
            case "_":
                encryptedStr += "65";
                break;
            case "=":
                encryptedStr += "66";
                break;
            case "+":
                encryptedStr += "67";
                break;
            case "[":
                encryptedStr += "68";
                break;
            case "]":
                encryptedStr += "69";
                break;
            case "{":
                encryptedStr += "70";
                break;
            case "}":
                encryptedStr += "71";
                break;
            case ";":
                encryptedStr += "72";
                break;
            case ":":
                encryptedStr += "73";
                break;
            case "'":
                encryptedStr += "74";
                break;
            case "\"":
                encryptedStr += "75";
                break;
            case "\\":
                encryptedStr += "76";
                break;
            case "|":
                encryptedStr += "77";
                break;
            case ",":
                encryptedStr += "78";
                break;
            case ".":
                encryptedStr += "79";
                break;
            case "<":
                encryptedStr += "80";
                break;
            case ">":
                encryptedStr += "81";
                break;
            case "/":
                encryptedStr += "82";
                break;
            case "?":
                encryptedStr += "83";
                break;
            case "\`":
                encryptedStr += "84";
                break;
            case "~":
                encryptedStr += "85";
                break;
            case "§":
                encryptedStr += "86";
                break;
            case "±":
                encryptedStr += "87";
                break;
            case "1":
                encryptedStr += "88";
                break;
            case "2":
                encryptedStr += "89";
                break;
            case "3":
                encryptedStr += "90";
                break;
            case "4":
                
            break;encryptedStr += "91";
            case "5":
                encryptedStr += "92";
                break;
            case "6":
                encryptedStr += "93";
                break;
            case "7":
                encryptedStr += "94";
                break;
            case "8":
                encryptedStr += "95";
                break;
            case "9":
                encryptedStr += "96";
                break;
            case "0":
                encryptedStr += "97"
                break;

        }       
    }

    return encryptedStr;
}

console.log(encrypt("Hi, Ed!"));