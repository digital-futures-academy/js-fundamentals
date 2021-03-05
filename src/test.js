let num = 35;
let change = 302;
let addition = num + change;
while(addition > 99) {
    addition -= 99;
}
console.log(addition);


let num2 = 40;
while (num2 < change) {
    num2 += 99;
}
console.log(num2);
let outputNum = num2 - change;
console.log(outputNum);


let testString = "5429972051247320552040282934312039353325353425933920353420403520402829392023293628253873";
let array = []
for (let i = 0; i < testString.length - 1; i += 2) {
    array.push(testString.slice(i, i + 2));
}
console.log(array);




let cipher = {
    'a': 8,
    'b': 9,
    'c': 10
}
console.log(cipher);

function swap(inputObject) {
    let swapped = {};
    for(let key in inputObject) {
        swapped[inputObject[key]] = key;
    }
    return swapped;
}

let swappedObject = swap(cipher);
console.group(swappedObject);


let string = asdabs;
let literal = String.raw(string);
console.log(literal);