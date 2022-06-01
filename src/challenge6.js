function encrypt(sentence) {
    const alphabet = 'abcd';
    let codedSentence = [];

    for (var i = 0; i < sentence.length; i++) {
        let characterIndex = sentence[i];
        codedSentence.push(alphabet.indexOf(characterIndex) + 1);
    };
    return codedSentence;
};
console.log(encrypt('bcda'));