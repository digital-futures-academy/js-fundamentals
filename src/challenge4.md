First-class functions are functions considered like variable which means

1.A function can be passed as an argument to other functions
Example:
OutputFunc(addTwoFunc,5);

2.A function can be returned by another function 
Example:
function area(length,breadth)
 {
  return length * breadth;
}
function volume(length,breadth)
{
  let height=3;
  return area(length,breadth)*height;//function return by another function
}
const volumeCalc=volume(5,4);//function assigned as a value to a variable 
console.log(volumeCalc);

3.A function can be assigned as a value to a variable.
let variable=func();

First-class functions concept means that we can take advantage of design patterns such as 
1.higher-order functions, 
2.partial function application, 
3.callbacks.

 Function declaration is one of the way to create a function.
Function name/identifier to Function is same as value to a variable name.
Function body/block of statements required to perform a specific task, enclosed in the function’s curly brackets { }.
Function declaration is just the existence and not enough to run the code inside the function body. To execute the function body we need to call function by function name( ).



