/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 400;
if (burgerPrice > 500) {
  //   console.log("Free Coke");
} else {
  //   console.log("Coke Price 30 tk");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 90;
let heightFeet = 5;
let heightInc = 5;
let totalIncHeight = heightInc + heightFeet * 12;
let heightMeter = totalIncHeight * 0.0254;

let bmi = weight / (heightMeter * 2);
bmi = bmi.toFixed(1);
if (bmi < 18.5) {
  //   console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  //   console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  //   console.log("you are overweight");
} else {
  //   console.log("you are obese");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let marks = 80;
if (marks >= 90 && marks <= 100) {
  //   console.log("A");
} else if (marks >= 80 && marks <= 89) {
  //   console.log("B");
} else if (marks >= 70 && marks <= 79) {
  //   console.log("C");
} else if (marks >= 60 && marks <= 69) {
  //   console.log("D");
} else if (marks >= 0 && marks <= 59) {
  //   console.log("F");
} else {
  //   console.log("Invalid Marks");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let friendMark = 90;
let me = 60;

if (friendMark > 80) {
  console.log("go for a lunch");
} else if (friendMark >= 60 && friendMark < 80) {
  console.log("good luck next time. ");
} else if (friendMark >= 40 && friendMark < 60) {
  console.log("keep your friend's message unseen");
} else if (friendMark < 40 || me < 80) {
  console.log("block your friend");
}
if (me < 80) {
  console.log("go to home and sleep and act sad");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 30;
let num2 = 20;
let result;
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);
