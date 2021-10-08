function greet(name){
    return "Hi, " + name + "!";
}

console.log(greet("Luke"));

function birthday(greeting){
    console.log(greeting + " It's your birthday!");
}

birthday(greet("Luke"));
