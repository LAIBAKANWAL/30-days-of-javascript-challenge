// Error Handling

// Activity 1  #Basic Error Handling with Try-Catch
// Task1
const throwError = () => {
  throw new Error("This is an intentional error!");
};

function handleError() {
  try {
    throwError();
  } catch (err) {
    console.log(err.message);
  }
}

handleError();

// Task2
let divideOfNum;
const checkDivide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero!");
  }
  divideOfNum = num1 / num2;
  return divideOfNum;
};

function safeDivide(num1, num2) {
  try {
    console.log(checkDivide(num1, num2));
  } catch (err) {
    console.log(err.message);
  }
}

safeDivide(5, 0);

// Activity 2  #Finally Block
// Task3
function checkFlow() {
  try {
    console.log("Its a try block");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Its a finally block it run every time");
  }
}

checkFlow();

// Activity 3  #Custom Error Objects
// Task4
class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZeroError";
  }
}

let result;
const divideNumbers = (num1, num2) => {
  if (num2 === 0) {
    throw new DivideByZeroError("Cannot divide by zero!");
  }
  result = num1 / num2;
  return result;
};

function safeDividee(num1, num2) {
  try {
    console.log(divideNumbers(num1, num2));
  } catch (err) {
    if (err instanceof DivideByZeroError) {
      console.error(`Custom Error: ${err.message}`);
    } else {
      console.error(`General Error: ${err.message}`);
    }
  }
}
safeDividee(5, 0);
safeDividee(6, 3);

// Task5
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
const validation = (name) => {
  if (name === undefined || name.trim() === "") {
    throw new ValidationError("empty string not allowed");
  }
  return name;
};

const validationLog = (name) => {
  try {
    console.log(validation(name));
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error(`Custom Error: ${err.message}`);
    } else {
      console.error(`General Error: ${err.message}`);
    }
  }
};
validationLog();
validationLog("");
validationLog("   ");
validationLog("laiba");

// Activity 4  #Error Handling in Promises
// Task6
const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Succeed!");
  } else {
    reject("Failed");
  }
});

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => console.log(err));

// Task7
const asynFun = async () => {
  try {
    let res = await promise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

asynFun();

// Activity 5  #Graceful Error Handling in Fetch
// Task8
fetch("https://www.laiba.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Fetch error: ${error.message}`);
  });

// Task9

const asynFunc = async () => {
  try {
    let res = await fetch("https://www.code.com");
    if (!res.ok) {
      throw new Error("Network2 response was not ok");
    }
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

asynFunc();