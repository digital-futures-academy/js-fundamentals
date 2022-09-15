 what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation

First class functions are a basic requiremnt for writiing higher level code. 
They can be treated like a value(number,string,array) and be passed to and from a function and stored in a varibale. 
These functions can refer to a variable inside the scope of the functions declaration.
Declaring a function is defining its parameters. Made up of the function name, (its parameters) and {the statement inside the functions body}  i.e ==> function calcRectArea(width, height) {
  return width * height;

calling a function is telling the computer to use the fuction i.e ===> console.log(calcRectArea(5, 6))