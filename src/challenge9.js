const encryption = '35107801320554';
function splitStringWithoutRepeating(inputString) {
    const usedChars = new Set();
    const outputArray = [];
    for (let i = 0; i < inputString.length - 1; i += 2) {
        const currentPair = inputString.slice(i, i + 2);
        if (!usedChars.has(currentPair)) {
            outputArray.push(currentPair);
            usedChars.add(currentPair);
        }
    }
    return outputArray;
}
console.log(splitStringWithoutRepeating(encryption))