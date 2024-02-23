# First Class Functions

## Basic Idea

The idea is that functions are considered in the same was as any variable, therefore they can be used as arguments of other functions, they can be returned by other functions, or assigned as a value to a variable.

## Example

### First we have several functions and eacg return an excuse when I forget my homework

const dogAteIt = () => {
    return "I'm sorry sir, my dog ate my homework!"
}

const forgotAtHome = () => {
    return "I'm sorry sir, I forgot my homework at home!"
}

const wasThereAny = () => {
    return "Was there any homework?"
}

const aliensTookIt = () => {
    return "I'm sorry sir, I did my homework but I was abducted by some aliens and they took it!"
}


### Then we add all those functions inside an array


const excusesWhenIForgetHomework = [dogAteIt, forgotAtHome, wasThereAny, aliensTookIt]


### We create a function that takes the array and chooses one randomly

const giveExcuse = (excuses) => {
    const randomExcuse = Math.floor(Math.random() * excuses.length)
    console.log(excuses[randomExcuse])
}


### Then we fire up this function and hope our teacher has had a good day

giveExcuse(excusesWhenIForgetHomework)