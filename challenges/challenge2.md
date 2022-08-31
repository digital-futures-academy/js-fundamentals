#### Requirements
Declare a `function` called `greet` that has 1 argument called `name` and returns a String `"Hi, <name>!"`
function greet(name){
    let str1 = "Hi,";
    let str2 = str1.concat(" ", name);
    return str2;
}