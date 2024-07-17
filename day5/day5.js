// Functions

// Activity 1  #Function declaration
// Task1
const numChecker = (userNumber) => {
  if (userNumber % 2 === 0) {
    console.log(`${userNumber} is even number`);
  } else {
    console.log(`${userNumber} is odd number`);
  }
};

numChecker(722);
numChecker(721);

// Task2
const calSquare = (num) => {
  return num ** 2;
};
const result = calSquare(4);
console.log(result);

// Activity 2  #Function Expression
// Task3
const findMaxNo = (num1, num2) => {
  return num1 >= num2
    ? `${num1} is greater then ${num2}`
    : `${num2} is greater then ${num1}`;
};

console.log(findMaxNo(23, 77));

// Task4
const greet = () => {
  return "hello " + "Laiba Welecome back :)";
};
console.log(greet());

// Activity 3  #Arrow Functions
// Task5
let sum;
const calSum = (num1, num2) => {
  return ` Sum of ${num1} and ${num2} is ${num1 + num2}`;
};

console.log(calSum(25, 25));

// Task6
const checkCharacter = (str, char) => {
  return str.includes(char);
};
console.log(checkCharacter("hello", "h"));
console.log(checkCharacter("hello", "H"));

// Activity 4 #Function parameters and default values
// Task7
const product = (prod1, prod2 = "Tablet") => {
  return `${prod1} , ${prod2}`;
};
console.log(product("Laptop", "Smartphone"));
console.log(product("Laptop"));

// Task8
const greeting = (name, age = 22) => {
  return `Welcome ${name} how's you. your age is ${age}`;
};
console.log(greeting("Laiba", "20"));
console.log(greeting("Maira"));

// Activity 5 #Higher-Order Functions
// Task9
const callFunctionNTimes = (func, num) => {
   for (let i = 0; i < num; i++) {
       console.log(`Calling function at index ${i}`);
       func();
   }
}

function sayHello() {
   console.log('Hello!');
}

callFunctionNTimes(sayHello, 4);


// Task10
const applyFunctions = (func1, func2, value) => {
   const result1 = func1(value);
   const result2 = func2(result1);
   return result2;
}

const double = (x) => x * 2;
const addTen = (x) => x + 10;

const finalResult = applyFunctions(double, addTen, 5);
console.log(finalResult); 

