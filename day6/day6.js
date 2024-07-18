// Arrays

// Activity 1  #Array Creation and Access
// Task1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task2
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(
  `first element is ${arr2[0]} and last element is ${arr2[arr2.length - 1]}`
);

// Activity 2  #Array Methods (Basic)
// Task3
const arr3 = [6, 7, 8, 9, 5];
arr3.push(25);
console.log(arr3);

// Task4
const arr4 = [6, 7, 8, 9, 5];
arr4.pop();
console.log(arr4);

// Task5
const arr5 = [6, 7, 8, 9, 5];
arr5.shift();
console.log(arr5);

// Task6
const arr6 = [6, 7, 8, 9, 5];
arr6.unshift(1);
console.log(arr6);

// Activity 3  #Array Methods (Intermediate)
// Task7
const arr7 = [6, 7, 8, 9, 5];
const res = arr7.map((num) => num * 2);
console.log(res);

// Task8
const arr8 = [6, 7, 8, 9, 5];
const result = arr8.filter((num) => num % 2 === 0);
console.log(result);

// Task9
const arr9 = [6, 7, 8, 9, 5];
const result1 = arr9.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(result1);

// Activity 4  #Array iteration
// Task10
const arr10 = ["ali", "laiba", "maira", "raja"];
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]);
}

// Task11
const arr11 = ["ali", "laiba", "maira", "raja"];
arr11.forEach((e) => console.log(e));

// Activity 5  #Multi-dimensional Arrays
// Task12
const arr12 = [
  ["ali", "laiba"],
  ["maira", "raja"],
];
console.log(arr12);
for (let i = 0; i < arr12.length; i++) {
  for (let j = 0; j < arr12[i].length; j++) {
    console.log(arr12[i][j]);
  }
}

// Task13
const arr13 = [
  ["ali", "laiba"],
  ["maira", "raja"],
];
console.log(arr13[0][1]);
