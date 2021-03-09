#### Requirements

We have a new requirement! We need to build a letter-letter substitution cipher quickly so we can decrypt the next message that pops into our pocket mysteriously!

- NB: Use [characterSet1](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745) for the Letter Number cipher and [characterSet2](https://gist.github.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a) for the Letter Letter cipher
- NB: Ciphers should assume a valid character set
- NB: Create more test cases to help you develop your program and cover different code paths.

### Acceptance Criteria
```js
let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)) // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'

// another way to test your program
console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))
```

### Mysterious Message in Pocket

> ~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu 
