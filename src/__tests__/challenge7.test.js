const LetterNumber = require('../challenge7');

describe('challenge7', () => {
    it('should offset 1 letter returning 2 chars', () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.encrypt("a", 1)).toEqual("03");
    });
    it('should offset 2 letters returning 4 chars', () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.encrypt("Ed", 4)).toEqual("3609");
    });
    it('should return the example result', () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.encrypt("Hi, Ed!", 302)).toEqual("37128003340756");
    });
})