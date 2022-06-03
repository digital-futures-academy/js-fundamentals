//First example assigning function as value to variable
const printMyAge = () => {
    console.log("my age is 18");
};
let myAge = printMyAge;
myAge();
//Second example passing function as argument
const printMyName = myName => {
    console.log(`My name is ${myName}`);
};
const name = input => {
    return input;
};
let myName = name("aroosa");
printMyName(myName);