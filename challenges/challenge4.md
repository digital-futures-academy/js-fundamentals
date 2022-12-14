#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

//Mo Razavi code
1- what `First Class` functions are and how this concept applies in JS?
functions that are treated in three ways:
first way: functions can be assigned to a variable --> example :
const greet = ()={
    return 'Hello, what's up?' 
}

second way: functions can be passed as arguments to other functions --> example: 
const comb = (firstWay, secondWay)=>{
    return firstWay() + ' ' + secondWay
}
console.log(comb(greet,'I am good'))
output is Hello, Sup? I am good

Third way : functions can be returned from other functions--> example:
const convGenerator = (word)=>{
    return ans=>{
        return word + ' ' + ans
    }
}
const newConv = convGenerator('Hello, Sup?')
console.log(newConv('I am good'))
output is Hello, Sup? I am good


2- what the difference is between declaring a function and calling it?
give examples for each explanation
decalring a function means that we creating a function that has a name and parameters and it does something for us but in order to see the output of the function we need to call the function. in total, we call a declared fucntion. for example :
declaring -->
function areaRectangle(w,l){
    return w * h
}

calling--->
const areaRectangleOne = areaRectangle(3,7)

if we log the areaRectangleOne the output is 21

