#### Requirements
In a markdown or text file called `challenge4.md` or `challenge4.txt`, write an explanation of
- what `First Class` functions are
- how this concept applies in JS.
- what the difference is between declaring a function and calling it
- Bonus: give examples for each explanation


In first class functions: functions are treated as any other variable and assigned as a value, can be passed as an argument to other function and can be returned by another function.

eg1: Assign function to a variable

const foo = () => {
    return "hello";
}

eg2: Pass as an argument

const example1 = (arg1, arg2) => {
    console.log(arg1() + arg2);
}
example1(foo, "world")


eg3: returning function

function foo() {
    return () => {
        console.log("hello");
    };
}