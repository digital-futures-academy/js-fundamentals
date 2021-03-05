#### Requirements
When I got home today, there was a note in my pocket with a ton of numbers on it, and the number 4771 circled! I think someone's left me an encrypted message!
I need a way to decrypt a letter-number encrypted string given a key!

Your implementation should
- Be well-encapsulated using a `class` called `LetterNumber`
- Use this [character set](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
- Be agnostic to the actual values - the character values might change

### Acceptance Criteria
```js
letterNumber.decrypt("5429972051247320552040282934312039353325353425933920353420403520402829392023293628253873", 4771) // a human-readable sentence
letterNumber.decrypt("69259338252027353434212034252524204035202335332520413620432940282021203425432035342598", 4771) // a human-readable sentence
letterNumber.decrypt("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771) // a human-readable sentence

// another way to test your program
let plaintext = "hello, world"
let key = 5
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key))
```
