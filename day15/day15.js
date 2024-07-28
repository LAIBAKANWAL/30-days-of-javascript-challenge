// Closures

// Activity 1  #Understanding Closures
// Task1
const outerFunc = () => {
  let name = "Laiba";
  return () => {
    return `Welcome ${name}. How's you?`;
  };
};
const newFunction = outerFunc();
console.log(newFunction());

// Task2
const createCounter = () => {
  let counter = 0;

  return {
    increment() {
      counter++;
    },
    getValue() {
      return counter;
    },
  };
};

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.getValue());

myCounter.increment();
console.log(myCounter.getValue());

// Activity 2  #Practical Closures
// Task3
const createIdGenerator = () => {
  let currentId = 0;

  return () => {
    currentId += 1;
    return currentId;
  };
};
const generateUniqueId = createIdGenerator();
console.log(generateUniqueId());
console.log(generateUniqueId());

// Task4
const createGreeter = (userName) => {
  return () => {
    return `Hello, ${userName}!`;
  };
};

const greetJohn = createGreeter("John");
console.log(greetJohn());

const greetJane = createGreeter("Jane");
console.log(greetJane());

// Activity 3  #Closures in Loops
// Task5
const createFunctionArray = (size) => {
  let functions = [];

  for (let i = 0; i < size; i++) {
    functions.push(
      (() => {
        const index = i;
        return () => {
          console.log(index);
        };
      })()
    );
  }
  return functions;
};
const functionArray = createFunctionArray(5);

functionArray[0]();
functionArray[1]();
functionArray[2]();

// Activity 4  #Module Pattern
// Task6

const createItemManager = () => {
    let items = []; 

    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            items = items.filter(i => i !== item);
        },
        listItems() {
            return items;
        }
    };
};

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.addItem('Orange');

console.log(itemManager.listItems()); 

itemManager.removeItem('Banana');

console.log(itemManager.listItems()); 

// Activity 5  #Memorization
// Task7
const memoize = (func) => {
    const cache = {}; 

    return (...args) => {

        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log('Returning cached result for', key);
            return cache[key];
        }
        console.log('Computing result for', key);
        const result = func(...args);
        cache[key] = result;
        return result;
    };
};

const slowFunction = (num) => {
   
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
};

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(10))

// Task8
const memoize2 = (func) => {
  const cache = {}; 

  return (...args) => {
      const key = JSON.stringify(args); 
      if (cache[key]) {
          console.log('Returning cached result for', key);
          return cache[key];
      }
      console.log('Computing result for', key);
      const result = func(...args);
      cache[key] = result;
      return result;
  };
};

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

const memoizedFactorial = memoize(factorial);


console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6)); 
