const fs = require('fs');

// Read txt file
fs.readFile('src/character_set.txt', (err, data) => {
    // Check that file exists
    if (err) {
        console.log(err);
        return;
    }

    // Insert data into table
    const table = insertIntoTable(data);

    const string = "Hi, Ed!";
    encryptedString = encryptString(table, string);
    console.log(encryptedString);
})

// Take txt file and insert data into a table
function insertIntoTable(text) {
    // Split the text into rows
    const rows = text.toString().split('\n');

    // Assuming the first row contains headers
    const headers = rows[0].split(', ');
    const data = [];

    // For each row, take the first word to use as a 'key' and the second one to use as a value
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(', ');
        if (row.length === headers.length) {
            const rowData = {};
            const changeRow = parseInt(row[1].replace('/r', ''));
            rowData[row[0]] = changeRow.toString();
            data.push(rowData);
        }
    }

    return data;
}

// Find 'key' character in the table and return its 'value' 
function findCharacter(table, c) {
    for (let i = 0; i < table.length; i++) {
        if (table[i][c]) {
            return table[i][c];
        }
    }
    return c;
}

// Return the encrypted version of the string
function encryptString(table, string) {
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        encrypted += findCharacter(table, string[i]);
    }
    return encrypted;
}