// Modules

// Activity 1  #Creating and Exporting Modules
// Task1
export const addNumbers = (num1, num2)=>{
    return `addition of ${num1} and ${num2} is ${num1 + num2}`;
}

// Task2
export const persomDetails = {
    name: 'laiba',
    age: 22,
    occupation: 'Software Engineer',
    greet(){
      return  `Hello ${this.name}`
    },
    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.occupation}.`;
    },
}

// Activity 2  #Name and Default Exports
// Task3
export const SubtractNumbers = (num1, num2)=>{
    return `Subtraction of ${num1} and ${num2} is ${num1 - num2}`;
}

// Task4
const MultiplyNo = (num1, num2)=>{
    return `Multiplication of ${num1} and ${num2} is ${num1 * num2}`;
}

export default MultiplyNo;

// Activity 3  #Importing Entire Modules
// Task5
export const animal = 'cat';
export const game = 'football';


