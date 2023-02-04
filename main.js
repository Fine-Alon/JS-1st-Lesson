//  Task 1:

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

function areaOfRect(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    let area = width * height;
    return area;
}

console.log(`Area = ${areaOfRect(x1, y1, x2, y2)} pixel. \n`);

// Task 2:

let a = 13.123456789;
let b = 2.123;
let n = 5;

function fractionalOfNum(num, accuracy) {
    let fractOfNum = Math.floor((num - Math.floor(num)) * Math.pow(10, accuracy));
    return fractOfNum;
}

let firstFract = fractionalOfNum(a, n);
let secondFract = fractionalOfNum(b, n);

console.log(`First fractional is - ${firstFract}`);
console.log(`Second fractional is - ${secondFract}`);
console.log(`Comparison results ( >, <, ≥, ≤, ===, ≠ ):`);
console.log(firstFract > secondFract);
console.log(firstFract < secondFract);
console.log(firstFract >= secondFract);
console.log(firstFract <= secondFract);
console.log(firstFract === secondFract);
console.log(firstFract !== secondFract);
console.log("\n");

// Task 3:

function randomNumberInRange(firstNumb, secondNumb) {
    let minNumb = Math.min(firstNumb, secondNumb);
    let maxNumb = Math.max(firstNumb, secondNumb);
    let range = Math.abs(maxNumb - minNumb);
    return Math.round((Math.random() * range) + minNumb);
}

let firstRandom = randomNumberInRange(100, -5);
let secondRandom = randomNumberInRange(100, -5);
console.log(`print two random numbers: \n     1st- ${firstRandom} \n     2nd- ${secondRandom}`);
console.log(`Comparison of numbers ( >, <, ≥, ≤, ===, ≠ ):`);
console.log(firstRandom > secondRandom);
console.log(firstRandom < secondRandom);
console.log(firstRandom >= secondRandom);
console.log(firstRandom <= secondRandom);
console.log(firstRandom === secondRandom);
console.log(firstRandom !== secondRandom);