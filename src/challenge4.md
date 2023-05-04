#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are


 First Class functions are functions that can be:


 - Stored in variables, other objects and arrays


   // addFunc is created first
   function addFunc(num1, num2) {
     return num1 + num2
   }


   //Then passed stored to the variable sum
   const sum = addFunc(1, 2);


 - Passed to other functions as arguments as well as be returned from another function


   // avgFunc returns an average between two numbers and takes a function (funcArg) as an argument/callback and will
   // return a function as an argument


   const avgFunc = (num1, num2, funcArg) => {
     return funcArg(num1, num2) / 2;
   }


   // Here we pass addFunc as the 3rd argument and will return the results of addFunc.
   console.log(avgFunc(5, 3, addFunc));


 - Properties and methods can be assigned to them


   // adding desc property to addFunc() function
   addFunc.desc = "Description of addFunc";


 - Can use built-in methods and properties afforded to all objects


   // result of addFunc will be a string
   addFunc.toString();






- how this concept applies in JS.


 As functions are treated as first-class objects/citizens in Javascript this allows us to use Functional Programming patterns as well as/instead of the conventional Object-Oriented-Programming.  Functional programming can allow our programming to be far more predictable, easier to separate and allow our code to be more reusable.


 The use of accepting functions as arguments (callbacks) in functions and the ability to return a function within another function allows us to create and use Higher Order Functions


 const avgFunc = (num1, num2, funcArg) => {
     return funcArg(num1, num2) / 2;
   }


 The use of callbacks also allows us to use async programming which allow multiple processes to execute simultaneously despite Javascript being a single thread language.


 const greeting = () => {
   setTimeout(() => {
     console.log("Ian");
   }, 2000);
 }


 const msg = async () => {
   const message = await greeting();
   console.log('Hi there');
 }


 msg();


- what the difference is between declaring a function and calling it
 Declaring a function is where you write out the code and define its behaviours and arguments.


 // Declaring
 function someFunc(x) {
   return x * 2;
 }


 Calling the function is where you tell the programme to run/execute the function


 // calling
 someFunc(10);




- Bonus: give examples for each explanation
