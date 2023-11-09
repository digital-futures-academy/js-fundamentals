import("node-fetch");
const url = 'https://gist.githubusercontent.com/dearshrewdwit/691c71616995ad2430ab309aa9998745/raw/78624a6c9499e049fd294ddb8302d93e6f675a0d/character_set.txt';

const load = async () => {
    const substitutionDict = {};
    const response = await fetch(url);
    const tableOfValues = await response.text();
    tableOfValues.split("\n").forEach(line => {
        const [key, value] = line.split(', ');
        substitutionDict[key] = value;
    });
    return substitutionDict;
}

exports.load= load;