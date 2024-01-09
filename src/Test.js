// Same as Challenge 2 - this time use an arrow function

// function hello() {
//   return 'Konnichiha'
// }

// function greetingMessage(greeting, name) {
//   return `${hello()}, ${name}!`
// }

// greetingMessage(hello(), 'Ed')

// console.log(greetingMessage(hello(), 'Ed'))

function hello() {
  return 'Konnichiha'
}

function greeting() {
  return `${hello()}, Ed!`
}

console.log(greetingMessage())