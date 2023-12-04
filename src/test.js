const myFunc=(...args)=>{
    console.log(args)
    return args[2](args[0],args[1])
    }
    
    //call the function, logging the result
    console.log(myFunc(2,3,(a,b)=>{
        return a*b
    }))