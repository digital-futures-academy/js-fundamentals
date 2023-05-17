A first class function is a function that can be used as a variable.
It can be passed through other functions as an argument and be the output of a function.
It is just another datatype that can be used.

JS has access to first class functions, so you can have
```const greet = (name) => { return `Hi, ${name}`; };```
from challenge 3 can be passed through another function such as
```let nameList = ["Jim","Kate","Max"]; let hiNames = nameList.map(greet);```
will make a new array with "Hi, name!" for each name.
A function was taken as an input to another function.

Declaring a function provides a descrition of what will occur when the function is called. However no code is run until it is called.
A function call runs the code from where the function was declared.

```function hi(){console.log("Hi!");}```
when run does not log anything to the console without
```hi();```
