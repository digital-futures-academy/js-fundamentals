function CharToNum (char){




const symbols = [ "!","@","£","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":","'","\"","\\","|",",",".","<",">","/","?","`","~","§","±"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = lowercase.map(name => name.toUpperCase());


if (lowercase.includes(char)) {
   
    return parseInt(char,36)-8;
}
else if (uppercase.includes(char)) {
    
    return parseInt(char,36)+18;
}
else if (char == " ") {
    return 1;
}
else if (symbols.includes(char)) {
    return symbols.indexOf(char) +54;
}
else {
    return Number(char) + 87;
}

}

function PerLetter (word){
var output = "";
for (var i = 0; i < word.length; i++) {
  output += CharToNum(word.charAt(i));
    
}
 return output
 
}
console.log(PerLetter("Hi, Ed!"));