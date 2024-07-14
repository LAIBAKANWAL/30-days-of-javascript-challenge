// Variables and Data Types

// Activity 1  #Variable declaration
// Task1
var children = 10;
console.log(children);

// Task2   
let str = 'hello laiba';
console.log(str);

// Activity 2    #Constant declaration
// Task3
const isPaid = false;
console.log(isPaid);

// Activity 3   #Data Types
// Task4
let count = 5;
let greet = 'Welcome back dear';
let examPassed = true;
let students = {
    id: 1,
    stdName: 'aba',
    course: 'javascript'
}
const courses = ['java', 'css', 'html','javascript'];
let stars;

console.log(count,typeof(count));           //number
console.log(greet,typeof(greet));           //string
console.log(examPassed,typeof(examPassed)); //boolean
console.log(students,typeof(students));     //object
console.log(courses,typeof(courses));       //object
console.log(stars,typeof(stars));           //undefined
console.log(null,typeof(null));             //object

// Activity 4   #Reassigning variables
// Task5

let game = 'cricket';
console.log(game);

game = 'football';
console.log(game);

// Activity 5   #Understanding const
// Task6

const months = 12;
console.log(months);

// months = 13; //Trying to reassign a const variable will throw an error
