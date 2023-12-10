### ReadMe


package succesfully created at https://www.npmjs.com/package/silly-cipher

Exercise 9 refactored with altered usage

- current package link is cipher.js

```````
npm install
npm link
```````


new cli usage -
``````
cipher <path/to/dictionary> <inputfile[.txt.enc]> <key[number]>

e.g cipher charChar.txt example.txt 50

will encode example.txt outputting example.txt.enc using the dictionary from charChar.txt and an offset of 50

``````
- The program will auto-detect if the given dictionary substitutes all numeric or alphanumeric

- Program will encode or decode depending on the fileName extension (.txt 2nd argument will encode, .txt.enc 2nd argument will decode)

-  A dictionary must consist of exactly 97 character substitutions

- The dictionary  must contain ***all*** of the following characters for substitution
 
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:'"\|,.<>/?`~§±1234567890

- The dictionary e.g.(charChar.txt) must have ***exactly*** 97 lines each following the following format:- character,(space)[integer or character]

- integers must be in the range 0-99

- all substitutions must be unique

example encoding .txt files are included ``````/src/data/charChar.txt`````` and ``````/src/data/charNum.txt``````
