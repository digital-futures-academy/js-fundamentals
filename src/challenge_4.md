A first class function is a function that is treated like a variable. In Javascript functions are used as objects to support the same operations as any other objects. The function can be:
- assigned to any variable 
eg. const foo = function() {
   console.log("foobar");
}

- passed as an argument 
eg. function sayHello() {
   return "Hello, ";

- returned by another function
eg. function sayHello() {
   return function() {
      console.log("Hello!");
   }
}

The difference between declaring and calling a function is:
- declare - to define and write the function
- call - to run the code and execute the function