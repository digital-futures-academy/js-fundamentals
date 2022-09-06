// const encryptTable = {
//     '' : 1
// }

let arr = [null, ' ', 'a', 'b', 'c', 'd', 'e']

function encryptString(string) {
    let encryption = ''
    for (let i of string) {
        encryption += arr.indexOf(i)
    }
    return encryption
}

//test
console.log(encryptString('abcde deabaaabbbbccc '))