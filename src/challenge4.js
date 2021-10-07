// Using the function keyword declare a function called `greet`
// that returns a String "Hi, Ed!"

const  greet = (name) => { // here greet is a const that is assigned a function
    return `Hi, ${name}!`
}

function grandgreeting(name,greet){ 
    console.log(greet(name)+" How are you?")
}

console.log(greet("Ritthik and Josh"))

grandgreeting("Ed",greet)