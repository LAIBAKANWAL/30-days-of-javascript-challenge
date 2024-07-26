// Classes

// Activity 1  #Class Definition
// Task1
class Person {
  constructor(name, age, lastName) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static genericGreet() {
    return `Hello! This is a generic greeting message.`;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
const person = new Person("Laiba", 23);
console.log(person.greet());

// Task2
Person.prototype.updateAge = function (updatedAge) {
  this.age = updatedAge;
  return `Age updated to ${this.age}.`;
};

console.log(person.updateAge(100));

// Activity 2  #Class Inheritance
// Task3
class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
    Student.incrementStudentCount();
  }

  stdId() {
    return `Student Id is ${this.studentID}.`;
  }
}

// const student = new Student('Laiba', 23, 12);
// console.log(student.studentID);

// Task4

Student.prototype.greet = function () {
  return `${Person.prototype.greet.call(this)} My student ID is ${
    this.studentID
  }.`;
};

// console.log(student.greet());

// Activity 3  #Static Methods and Properties
// Task5
// console.log(Person.genericGreet())

// Task6
Student.studentCount = 0;
Student.incrementStudentCount = function () {
  if (!Student.studentCount) {
    Student.studentCount = 0;
  }
  return Student.studentCount++;
};

Student.getStudentCount = function () {
  return Student.studentCount;
};

const student = new Student("Laiba", 23, 12);
console.log(student.studentID);
console.log(Person.genericGreet());
const student2 = new Student("maira", 23, 12);
const student3 = new Student("sana", 23, 12);

console.log(`Total number of students: ${Student.getStudentCount()}`);

// Activity 4  #Getters and Setters
// Task7
const person1 = new Person("Laiba", 23, "Kanwal");
console.log(person1.fullName);

// Task8
Object.defineProperty(Person.prototype, "setFullName", {
  set: function (fullName) {
    const [updatedName, updatedLastName] = fullName.split(" ");
    this.name = updatedName;
    this.lastName = updatedLastName;
  },
});
person1.setFullName = "Sana Khan";
console.log(person1.fullName);

// Activity 5 #Private Fields
// Task9
class Account {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive and greater than zero");
    }

    this.#balance += amount;

    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance(){
    return this.#balance;
  }
}

// Task10
const account = new Account(1000);
console.log(account.getBalance()); 

account.deposit(500);
console.log(account.getBalance()); 

account.withdraw(300);
console.log(account.getBalance());

try {
    account.withdraw(2000); 
  } catch (error) {
    console.error(error.message); 
  }
  
  try {
    account.deposit(-100); 
  } catch (error) {
    console.error(error.message); 
  }


