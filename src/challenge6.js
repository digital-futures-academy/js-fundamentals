const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?`~§±1234567890'
//console.log(alphabet.length)
console.log(alphabet.indexOf(' '))


function convert(string){
    let ans = ''
    for (let i = 0; i < string.length; i++) {
        ans += (alphabet.indexOf(string[i])+1)
    }
    console.log(ans)
}

// ignore - playing around with merge

convert('Hi, Ed!')

