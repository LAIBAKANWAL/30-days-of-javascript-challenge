//Operators

// Activity 1  #Arithmetic Operations
// Task1

const result1 = 60 + 70;  //addition
console.log(result1);

// Task2
const result2 = 60 - 70;   //subtraction
console.log(result2);

// Task3
const result3 = 6 * 70;    //multiplication
console.log(result3);

// Task4
const result4 = 60 / 6;  //division
console.log(result4);

// Task5
const result5 = 10 % 3;  //modulus or reminder
console.log(result5);

// Activity 2  #Assignment Operators
// Task6
let count = 10;
count += 3;
console.log(count);

//Task7
let price = 200;
price -= 100;
console.log(price);

// Activity 3  #Comparison Operators
// Task8
const number1 = 50;
const number2 = 10;
if(number1 < number2){
    console.log(`${number1} is less than ${number2}`);
}
else if(number1 > number2){
    console.log(`${number1} is greater than ${number2}`);
}


// Task9
const TotalNo1 = 90;
const TotalNo2 = 80;
if(TotalNo1 <= TotalNo2){
    console.log(`${TotalNo1} is less than or equal to ${TotalNo2}`);
}
else if(TotalNo1 >= TotalNo2){
    console.log(`${TotalNo1} is greater than or equal to ${TotalNo2}`);
}

// Task10
const no1 = 80;
const no2 = "80";
if(no1 == no2){
    console.log("According to == both numbers are equal");
}
else if(no1 === no2){
    console.log("According to === both numbers are not equal");
}


// Activity 4  #Logical Operators
// Task11
let marks1 = 60;
let age1 = 20;
if(marks1 >= 50 && age1 >=16){
    console.log('Eligible for the round');
}
else{
    console.log("Not Eligible for the round")
}


// Task12
let marks2 = 40;
let age2 = 25;
if(marks2 >= 50 || age2 >=16){
    console.log('Eligible');
}
else{
    console.log("Not Eligible")
}

// Task13
let stdFeePaid = false;
if(!stdFeePaid == true){
    console.log('Paid User');
}
else{
    console.log('Unpaid User');
}


// Activity 5  #Ternary Operator
// Task14
const no = 22;
const result = no >=0 ? `${no} is positive` :`${no} is negative`;
console.log(result);

