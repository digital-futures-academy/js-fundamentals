//#### Requirements
//I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
// ```
// "E" -> "32"
// "d" -> "5"
// "Ed" -> "325"
// "Hi, Ed!" -> "351078132554"
// ```

//Use your best judgment with your pair partner. If you want clarification, ask your coach.

function decript(str) {
    
    const decriptTab = {
        'E': '32',
        'H': '35', 
        'd': '05', 
        'i': '10', 
        ',': '78',
        '!': '54'
    };

    
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        const xnet = str[i];
       
        if (decriptTab.hasOwnProperty(xnet)) {
            newStr += decriptTab[xnet];
        } else {
            
            newStr += xnet;
        }
    }

    return newStr;
}

console.log(decript("Hi, Ed!"))


//I couldn't enter a space in the code?!