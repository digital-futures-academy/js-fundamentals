const LetterNumber = require("../challenge8");
describe("challenge8", () => {
    it("should return the correct letter for no offset", () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.decrypt("02", 0)).toEqual("a");
    });
    it("should return 2 correct letters with an offset", () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.decrypt("3609", 4)).toEqual("Ed");
    });
    it("should return the correct letter for a large offset", () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.decrypt("02", 100)).toEqual("a");
        expect(letterNumber.decrypt("02", 200)).toEqual("a");
        expect(letterNumber.decrypt("02", 301)).toEqual(" ");
    });
    it("should return the example result", () => {
        const letterNumber = new LetterNumber();
        expect(letterNumber.decrypt("37128003340756", 302)).toEqual("Hi, Ed!");
    });
    it("should return the given human readbale sentence 1", () => {
        const letterNumber = new LetterNumber();
        expect(
            letterNumber.decrypt(
                "0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025",
                4771
            )
        ).toEqual("Hi, Ed! I think someone's on to this cipher!");
    });
    it("should return the given human readbale sentence 2", () => {
        const letterNumber = new LetterNumber();
        expect(
          letterNumber.decrypt(
            "21774590777279878686737286777776729287727587857772938872958192807273728677957287867750",
            4771
          )
        ).toEqual("We're gonna need to come up with a new one.");
    });
    it("should return the given human readbale sentence 3", () => {
        const letterNumber = new LetterNumber();
        expect(
          letterNumber.decrypt(
            "0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225",
            4771
          )
        ).toEqual(
          "I think I have just the thing. A letter-letter substitution cipher! Let's do it!"
        );
    });
})
