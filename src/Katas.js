//Kata 1

function squareSum(numbers) {
    //empty variable to store the running sum of the squares
    let runningSum = 0;
    //iterate through each value in list
    for (let i = 0; i < numbers.length; i++) {
        runningSum += (numbers[i] ** 2);
    }
    return runningSum;
}

//Kata 2

function numberToString(integer) {
    return integer.toString();
}

//Kata 3

function bmi(weight, height) {
    const bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese"
    }
}

//Kata 4

function points(results) {
    let pointscollector = 0
    for (let i = 0; i < results.length; i++) {
        if (parseInt(results[i].slice(-3)) > parseInt(results[i].slice(-1))) {
            pointscollector += 3
        } else if (parseInt(results[i].slice(-3)) === parseInt(results[i].slice(-1))) {
            pointscollector += 1
        } else {
            pointscollector += 0
        }
    }
    return pointscollector
}

//Kata 5

function solution(ogstring) {
    var stringcontainer = "";
    for (let i = (ogstring.length - 1); i >= 0; i -= 1) {
        stringcontainer += ogstring[i];
    }
    return stringcontainer;
}