// ES6 + Features

// Activity 1  #Template Literals
// Task1
let personName = "laiba";
let age = 22;
console.log(`Person's name is ${personName} and her age is ${age}`);

// Task2
const year = 2020;
const bookDetails = `
Title: The hobbit
Author: J.R.R.Tolkien
Year: ${year}
`;
console.log(bookDetails);

// Activity 2  #Destructuring
// Task3
const num = [1,34,5,73,7];
const [first,second] = num;
console.log(`first number is ${first} and second number is ${second}`);

// Task4
const book = new Object();
book.title = 'The hobbit';
book.author = 'J.R.R.Tolkien',
book.year = 1937

const {title: bookTitle,author: bookAuthor } = book;
console.log(`title: ${bookTitle} and author is ${bookAuthor}`);


// Activity 3  #Spread and Rest Operators
// Task5
const originalArray = [1,2,3,4,5,6];
const newArray = [...originalArray, 7];
console.log(newArray);

// Task6
let sum = 0;
const addition = (...numbers) =>{
    numbers.forEach((e)=> {
        sum += e
    })
    return sum

}
console.log(addition(2,4,56,43,2));

// Activity 4  #Default Parameters
// Task7
const products = (prd1,prd2=1) =>{
return [prd1, prd2];
}
console.log(products(2,5));
console.log(products(2));


// Activity 5  #Enhanced object literals
// Task8
const stdName = 'laiba';
const keyName = 'age';

const student = {
     stdName,
    [keyName] : 10,
     CourcesMarks(){
        return{
            courcemark1: 90,
            courcemark2: 120,
        }
     },
}
console.log(student.CourcesMarks());

// Task9
const name1 = 'name';
const name2 = 'age';

const person = {
    [name1]: 'Alice',
    [name2]: 30
};
console.log(person);