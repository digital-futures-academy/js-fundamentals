function encrypt(str) {
    const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
    let encryptedStr = "";
    for (let i = 0; i < str.length; ++i) {
        encryptedStr += characters.indexOf(str[i]) + 1;
    }
    return encryptedStr;
};
console.log(encrypt('Hi, Ed!')) //prints 351078132554