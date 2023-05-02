function square(x) {
    return x * x;
}

function call(callbackFn, arg) {
    return `Calling internal function: ${callbackFn(arg)}`; // here callbackFn is passed in as an argument and invoked
}

function apply_twice(callbackFn) {
    return x => callbackFn(callbackFn(x)); // we can return functions as well
}

function main() {
    const fourth_power = apply_twice(square); // fourth_power is defined within another function and has been returned. Note the function `square` hasn't been called yet
    console.log(call(fourth_power, 5));
}

main();