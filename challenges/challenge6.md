#### Requirements
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```

// Mo Razavi code
//step 1 + step 2: reading a txt file + chaing the array into two arrays 
const { match } = require('assert');
const {readFileSync, promises: fsPromises} = require('fs');
 
let letters, numbers 
letters = []
numbers=[]


const readingTxt = (fileName)=>{
    //read 
    const read = readFileSync(fileName,'utf-8')
    const spliting = read.split(/\r?\n/)
    //now the time for seperating
    spliting.forEach(element =>{
        
        letters.push(element[0])
        //number collection
        if (element.length === 5){
            numbers.push(element[3]+element[4])
        }else {
            numbers.push(element[3])
        }
        
    })

}
const execution = readingTxt('./character_set.txt')

//step 3 : using nested for loop to subtitude the letters/characters by numbers

const Sub = (myInput)=>{
    let result = ''
    for (let i=0 ; i < myInput.length ; i++ ){
        for (let j=0 ; j < numbers.length; j++){
            if (myInput[i] === letters[j]){
                result += numbers[j]
            } 
            
        }
    }
    return result 
}

//step 4 : calling the fuction + making sure it works!
const myFunc= Sub('Hi, Ed!')
console.log(myFunc) // successfully done! 351078132554 = 351078132554 



