const { LetterNumber,LetterLetter } = require("../challenge9");

describe("challenge9", () => {
    describe("decrypt letterNumber", () => {
        it("should return the correct letter for no offset", () => {
            const letterNumber = new LetterNumber();
            return letterNumber.decryptAsync("02", 0)
                .then(result => {
                    expect(result).toEqual("a");
                })
        })
    })
    describe("encrypt letterNumber", () => {
        it("should return the correct letter for no offset", () => {
            const letterNumber = new LetterNumber();
            return letterNumber.encryptAsync("a", 0)
                .then(result => {
                    expect(result).toEqual("02");
                })
        })
    })
    describe("decrypt letterLetter", () => {
        it("should return the correct letter for no offset", () => {
            const letterLetter = new LetterLetter();
            return letterLetter.decryptAsync("X")
                .then(result => {
                    expect(result).toEqual("a");
                })
        })
    })
    describe("encrypt letterLetter", () => {
        it("should return the correct letter for no offset", () => {
            const letterLetter = new LetterLetter();
            return letterLetter.encryptAsync("a")
                .then(result => {
                    expect(result).toEqual("X");
                })
        })
    })
    describe("mysterious messages", () => {
        it("should return a d", () => {
            const letterLetter = new LetterLetter();
            return letterLetter.decryptAsync("*")
                .then(result => {
                    expect(result).toEqual("d");
                })
        
        })
        it("should return the given test message", () => {
            const letterLetter = new LetterLetter();
            return letterLetter.decryptAsync("B!!ym!9DAm2§DAD ")
                .then(result => {
                    expect(result).toEqual("Look over there!");
                })
        })

        it("should return the mysterious message", () => {
            const letterLetter = new LetterLetter();
            return letterLetter.decryptAsync("~JtMy m&DmwDDmXmtu2AXM2t!w mewMDm[!JmADXm2§tum.DuuX£D$m3twm2§DmM!..Jwt2[mM§XwwD7mwX.DmNAXw!.Nm!wmGtuM!A*$mXwmu§XADmXmAXw!.m3XM2mAD£XAtw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuDm2§tum_t77mtu2AXM2mXwmu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu")
                .then(result => {
                    expect(result).toEqual("Quick! We nee a istraction! Once you rea this message, fin the community channel name \"ranom\" on Discord, an share a ranom fact regaring any insect - but it has to be about insects! Fingers crosse this will istract an slow down the people cracking these ciphers");
                })
        })
        it("should encrypt the mysterious sodding 'd'less message", () => { 
            const letterLetter = new LetterLetter();
            return letterLetter.encryptAsync("Quick! We nee a istraction! Once you rea this message, fin the community channel name \"ranom\" on Discord, an share a ranom fact regaring any insect - but it has to be about insects! Fingers crosse this will istract an slow down the people cracking these ciphers")
                .then(result => {
                    expect(result).toEqual("~JtMy m&DmwDDmXmtu2AXM2t!w mewMDm[!JmADXm2§tum.DuuX£D$m3twm2§DmM!..Jwt2[mM§XwwD7mwX.DmNAXw!.Nm!wmGtuM!A*$mXwmu§XADmXmAXw!.m3XM2mAD£XAtw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuDm2§tum_t77mtu2AXM2mXwmu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu");
                })
        })
    })


})