- First class functions are functions that can be treated like other values or variables.
- This means that functions can be passed as parameters in other functions, functions can be assigned to variables, and functions
  can be returned from functions
- Declaring a function is assigning a function a name whereas calling it is invoking the function and running the content and instructions inside the function

//function declaration
function say(word){
return word
};

//calling a function
say('hi');

//assigning function to variable
let greet = say;

//passing function as parameter
function checkIfGreet (greet){
if (greet('hi') === 'hi'){
return true
};
};

/returning function from another function
function returnFunc(func, param){
return func(param)
};
returnFunc(greet, 'hello');
