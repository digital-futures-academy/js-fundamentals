const greet = name => {
    return `Hi, ${name ? name : 'Ed'}!`;
}

console.log(`${greet()}`);
console.log(`${greet('Dan')}`);