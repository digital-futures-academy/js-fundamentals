function encrypt(input){

    let code = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:."\\|,.<>/?\`~§±1234567890';
    let result = "";
    for(let i = 0; i < input.length; i++){
        result += code.indexOf(input[i]) + 1;
    }
    return result
}

console.log(encrypt("Hi, Ed!"))