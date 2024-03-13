# `First-class` functions

Programming languages are said to have First-class functions if they treat them like any other variable. Meaning, they can be assigned to a variable as well as being passed as argument and/or returned by other functions.

## In JS

In Javascript, functions are treated as FIrst-class, that is they are a value and another type of object.

```javascript
const ciao = () => {
  return 'Ciao, ';
};
function myFriend(f) {
  return `${f}my friend!`;
}
function greeting() {
  return function () {
    console.log(myFriend(ciao()));
  };
}
greeting()();
```

## Declaring and calling

Declaring a function means defining its name (_optional_), parameter (_optional_) and return type as well as the action we want the code to perform.

```javascript
function f() {
  return 'Hello, World!';
}
```

Calling a function, instead, it means triggering it in order to let it perform its task.

```javascript
f();
```
