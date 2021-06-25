const fs = require('fs');
fs.readFile('character_set.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    data = data.split(/[\s,]+/);
    let letters = [' '];
    let values = [1];
    for (let n=3; n<154; n+=2){
        letters.push(data[n]);
        values.push(data[n+1]);
    }
    letters.push(',');
    for (n=155; n<data.length; n+=2){
        values.push(data[n]);
        letters.push(data[n+1]);
    }
    encrypt = (obj) => {
        let str = '';
        for (let i=0; i<obj.length; i++){
          let char = obj.charAt(i);
          let x = letters.indexOf(char);
          let z = values[x]
          str += z;
        }
        console.log(str);
      };
    encrypt('Hi, Ed!');
});
