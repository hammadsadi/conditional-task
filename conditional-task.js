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
