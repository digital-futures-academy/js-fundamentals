const url = 'https://gist.githubusercontent.com/dearshrewdwit/691c71616995ad2430ab309aa9998745/raw/78624a6c9499e049fd294ddb8302d93e6f675a0d/character_set.txt'
const fetchPromise = import("node-fetch");

fetchPromise
  .then(({ default: fetch }) => {
    fetch(url)
        .then(response => response.text())
        .then(tableOfValues => {
            const substitutionDict = {};

            tableOfValues.split("\n").forEach(line => {
                const [key, value] = line.split(', ');
                substitutionDict[key] = value;
            });

            console.log(substitutionDict);
        });
  })
  .catch((error) => console.log(error));
