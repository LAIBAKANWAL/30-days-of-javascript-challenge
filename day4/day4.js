// Loops

// Activity 1  #For Loop
// Task1
let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(i);
}

// Task2
let count = 10;
for (let i = 1; i <= count; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2  #While Loop
// Task3
let no1 = 1;
sum = 0;
while (no1 <= 10) {
  sum += no1;
  no1++;
}
console.log(`Sum of 1 to 10 is ${sum}`);

// Task4
let no2 = 10;
while (no2 >= 1) {
  console.log(no2);
  no2--;
}

// Activity 3  #D0... While Loop
// Task5
let no3 = 1;
do {
  console.log(no3);
  no3++;
} while (no3 <= 5);

// Task6
let factNumber = 77;
let no = factNumber;
let result = 1;
do {
  result *= no;
  no--;
} while (no > 0);

console.log(`Factorial of ${factNumber} is ${result}`);

// Activity 4  #Nested Loop
// Task7
for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}


// Activity 5  #Loop Control Statements 
// Task8
for (let i = 1; i<=10; i++){
  if(i === 5){
    continue;
  }
  console.log(i);
}

// Task9
for (let i = 1; i<=10; i++){
  if(i === 7){
    break;
  }
  console.log(i);
}