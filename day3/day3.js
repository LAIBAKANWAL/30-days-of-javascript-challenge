// Control Structures

// Activity 1  #If-Else Statements
// Task1
const number = 10;
if (number > 0) {
  console.log(`${number} is postive number`);
} else if (number < 0) {
  console.log(`${number} is negative number`);
} else {
  console.log(`it's ${number}`);
}

// Task2
let age = 18;
if (age >= 18) {
  console.log("Eligible for vote");
} else {
  console.log("Not eligible for vote");
}

// Activity 2  #Nested If-Else Statements
// Task3
let num1 = 50;
let num2 = 90;
let num3 = 60;
let largestNo;

if (num1 >= num2) {
  if (num1 >= num3) {
    largestNo = num1;
  } else {
    largestNo = num3;
  }
} else {
  if (num2 >= num3) {
    largestNo = num2;
  } else {
    largestNo = num3;
  }
}

console.log(`Largest number among three number is ${largestNo}`);

// Activity 3  #Switch Case
// Task4
let dayNo = 4;
switch (dayNo) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("In week only 7 days");
}

// Task5
let score = 82;
let grade;

switch (true) {
  case (score >= 80):
    grade = "A";
    break;
  case (score >= 70):
    grade = "B";
    break;
  case (score >= 60):
    grade = "C";
    break;
  case (score >= 50):
    grade = "E";
    break;
  default:
    grade = "F";
}
console.log(`The grade is ${grade}`);


// Activity 4  #Conditional (Ternary) Operator
// Task6
let num = 124;
let checker = (num % 2 === 0) ? `${num} is an even number` : `${num} is an odd number`;
console.log(checker);


// Activity 5  #Combining Conditions
// Task7
let year = 2020;
let isLeapYear;

let yearChecker = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) ? `${year} is a leap year` : `${year} is not a leap year`;

console.log(yearChecker);
