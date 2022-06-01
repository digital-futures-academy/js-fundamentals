function encrypt(sentence) {
    const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?`~§±1234567890';
    let codedArray = [];
    let codedSentence;

    for (var i = 0; i < sentence.length; i++) {
        let characterIndex = sentence[i];
        codedArray.push(alphabet.indexOf(characterIndex) + 1);
    };
    return codedSentence = codedArray.join('');
};
encrypt('Hi, Ed!');