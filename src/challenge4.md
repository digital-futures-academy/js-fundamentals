#### Answers

Write an explanation of

- what `First Class` functions are
  These are functions that are treated as variables. This means that they can be passed as arguments to other functions, assigned as values to other variables, or returned by other functions.
  E.G.
  function today() {
  return `Good morning! Today's weather will be`;
  }

  The above function can now be used as follows:

  1. As an argument
     const weather = function (greeting, condition) {
     console.log(greeting() + condition);
     };
     weather(today, 'sunny');

  2. Assigned to a new variable:
     const todayGreet = today()
     let condition = 'sunny';
     console.log(`${todayGreet} ${condition}`);

  3. Returned by another function:
     function dailyGreeting() {
     let condition = 'rainy';
     console.log(`${today()} ${condition}`)
     };
     dailyGreeting();

- how this concept applies in JS.
  See above

- what the difference is between declaring a function and calling it
  A function is declared when it is specified for the first time:
  const productOf = function(x, y) {
  result = x \* y
  return result
  };
  To run the function, it has to be called:
  productOf(578, 52);

- Bonus: give examples for each explanation
