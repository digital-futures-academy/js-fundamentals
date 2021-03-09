#### Requirements
I want to be able to add a simple key to my encryption that offsets the table value by the given amount.

Your implementation should
- Be well-encapsulated using a `class` called `LetterNumber`
- Use this [character set](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
- Be agnostic to the actual values - the character values might change

NB: plaintext = starting string. ciphertext = encrypted string
NB: Each encrypted plaintext character should never be more than two ciphertext characters. If the evaluation of the encrypted character value is > 99, then reset from 0 and continue adding. Consequently, each encrypted plaintext character should always be two ciphertext characters: if the encrypted plaintext character results in a value of '8'  it should be '08' in ciphertext characters. See below for more test cases.

### Acceptance Criteria
```js
letterNumber.encrypt("a", 1) // "03"
letterNumber.encrypt("Ed", 4) // "3609"
letterNumber.encrypt("Hi, Ed!", 302) // "37128003340756"
```
