const {challengeMe}=require('../challenge6.js')

describe('challenge6',()=>{
    test('it should return the example result',()=>{
return challengeMe("Hi, Ed!")
.then(result=>{
    expect(result).toEqual("351078132554")
})
})
})