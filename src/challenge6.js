
const encryptAString = inputString => {
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let smallStartingValue = 2;
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUV';
    let capitalStartingValue = 28;
    let specialChar1 = '!@£$%^&*()-_=+[]{};:'
    let specialChar1Start = 54;
    let specialChar2 = '"\|,.<>/?`~§±';
    let specialChar2Start = 76;
    let result = [];
    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j < smallLetters.length; j++) {
            if (inputString[i] === smallLetters[j]) {
                result = result.concat(j + smallStartingValue);
            }
            else if (inputString[i] === capitalLetters[j]) {
                result = result.concat(j + capitalStartingValue);
            }
            else if (inputString[i] === specialChar1[j]) {
                result = result.concat(j + specialChar1Start);
            }
            else if (inputString[i] === specialChar2[j]) {
                result = result.concat(j + specialChar2Start);
            }
        }
        if (inputString[i] === "'") {
            result = result.concat(74);
        }
        if (inputString[i] === " ") {
            result = result.concat(1);
        }
    }
    result = result.join("");
    console.log(result);
}
encryptAString("ArO osa");
