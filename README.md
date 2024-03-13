# Cipher

Initialize a Node.js project

```javascript
npm init -y
```

Install the cipher package

```javascript
npm i ciphery-mickeymarse-js_challenges-digital_futures
```

In your `index.js` file:

```javascript
import cipher from 'ciphery-mickeymarse-js_challenges-digital_futures';
cipher();
```

Run the `cipher` command followed by the appropriate flags:

- `-e, --encrypt` - Encrypt file
- `-d, --decrypt` - Decrypt file  
  They can only accept as methods:
  - `ll` - LetterLetterCipher
  - `ln` - LetterNumberCipher
- `-f, --file` - Path to file you want to encrypt. If you need to decrypt, make sure it has the `.enc` extension.
- `-k, --key` - Number you want to pass for the `ln` encryption/decryption
