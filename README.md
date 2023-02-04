# JS-1st-Lesson
### task 1:Calculate area of rectangle.
### task 2:Calculate the fractional parts of the numbers a and b with a precision of n.
### task 3:Write a generator of two random numbers in the range between n and m, inclusive, Print two random numbers, Compare the two numbers you get  and print. 
task1...  
Write down the coordinates of two arbitrary points in x and y variables: x1, y1 — the first point; x2, y2 is the second point. Calculate the area of the rectangle whose opposite corners are represented by the given points. Output result.  

task 2...  
Calculate the fractional parts of numbers a and b with n precision. Print the resulting numbers using console.log. Output the results of their comparison (>, <, ≥, ≤, ===, ≠) with console.log.  

task 3...  
Write a generator of two random numbers between n and m inclusive. Note that n and m can be negative, and it can also be n > m or n < m.
Print two arbitrary numbers to the console.
Compare the two received numbers. Print the results of their comparison >, <, ≥, ≤, ===, ≠.  

my decision:  
Task 1:  
 __  let x1 = 2;  
 __  let y1 = 3;  
 __  let x2 = 10;  
 __  let y2 = 5;  
  
function areaOfRect(x1, y1, x2, y2) {  
___  let width = Math.abs(x1 - x2);  
___  let height = Math.abs(y1 - y2);  
___  let area = width * height;  
___  return area;  
}  
  
console.log(`Area = ${areaOfRect(x1, y1, x2, y2)} pixel. \n`);   

Task 2:  
___  let a = 13.123456789;  
___  let b = 2.123;  
___  let n = 5;  

function fractionalOfNum(num, accuracy) {  
___  let fractOfNum = Math.floor((num - Math.floor(num)) * Math.pow(10, accuracy));  
___  return fractOfNum;  
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

Task 3:  

function randomNumberInRange(firstNumb, secondNumb) {  
___  let minNumb = Math.min(firstNumb, secondNumb);  
___  let maxNumb = Math.max(firstNumb, secondNumb);  
___  return Math.round((Math.random() * range) + minNumb);  
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
