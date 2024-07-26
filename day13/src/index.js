// import MultiplyNo, { addNumbers, persomDetails, SubtractNumbers } from "./details.js";


// const result1 = addNumbers(4,88);
// console.log(result1);

// const result2 = persomDetails;
// console.log(result2.introduce());


// const result3 = SubtractNumbers(65,22);
// console.log(result3);

// const result4 = MultiplyNo(23,5);
// console.log(result4);


import MultiplyNo, * as details from "./details.js";


const result1 = details.addNumbers(4,88);
console.log(result1);

const result2 = details.persomDetails;
console.log(result2.introduce());


const result3 = details.SubtractNumbers(65,22);
console.log(result3);

const result4 = MultiplyNo(23,5);
console.log(result4);


const result5 = details.animal;
console.log(result5);

const result6 = details.game;
console.log(result6);



// Activity 4  #Using Third-Party Modules and Module Bundling
// Task6  and Task9
import _ from 'lodash';
let array = [1, 2, 3, 4, 5, 6];

const sum = _.sum(array);

console.log(sum); 

// Task7
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


