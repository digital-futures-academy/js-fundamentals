##Challenge 4
'A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

e.g. function declaration
const myFunc=(...args)=>{
    console.log(args)
    return args[2](args[0],args[1])
    }
    
    //call the function, logging the result
    console.log(myFunc(2,3,(a,b)=>{
        return a*b
    }))
result:
[ 2, 3, [Function (anonymous)] ]
6

