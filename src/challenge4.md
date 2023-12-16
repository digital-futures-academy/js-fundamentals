1. A first class function is a function that may be treated like any other variable in the given programming language.
    <b>Examples:</b>
    const addTwoNumbers = (num1,num2) => return num1+num2;
    const addEm = addTwoNumbers;
    addEm(2,2); //returns 4

    function executor(toBeExecuted,param1,param2) {
        toBeExecuted(param1,param2);
    }
    const x = 1;
    const y = 2;
    const exec1 = (x,y) => return x*y;
    const exec2 = (x,y) => return x-y;
    executor(exec1,x,y); // returns 2
    executor(exec2,x,y); // returns -1
    
2. In JS, named arrow functions, and functions declared with the 'function' keyword can be passed as parameters and assigned as normal variables. Arrow functions off certain coding-efficient advantages.
    <b>See 1 (above) for examples</b>
3. The difference between declaring a function and calling it:
    <b>Declaring a function: Defining the function e.g.</b>
    function printName(name) {console.log(\`The name is \${name}\`);}
    
    or
    
    const printName name => conseol.log(\`The name is ${name}\`);
    
    <b>Calling the function</b>
    Calling a function is the actual execution of its logic e.g. (using either of the declaration examples above):

    printName("Gerald");
    
    We previously defined printName and here we execute it. Sometimes definition and execution can happen subtly e.g. 
    
    const myArray = [1,2,3,4,5];
    myArray.forEach(element => console.log(\`The element=[${element}]\`));
    
    In this case, the arrrow function (callback function here) is defined when the loop starts and called each time around.
