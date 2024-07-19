// Objects

// Activity 1  #Object Creation and Access
// Task1
const book = {
    title: 'The hobbit',
    author: 'J.R.R.Tolkien',
    year: 1937
}
console.log(book);

// Task2
console.log(`title is : ${book.title} and author is : ${book.author}`);


// Activity 2  #Object Methods
// Task3
book.getDetails = () => `title is : ${book.title} and author is : ${book.author}`;
console.log(book.getDetails());

// Task4
book.yearUpdate = (year=2021) => book.year = year;
book.yearUpdate(2020);
console.log(book.year);

// Activity 3  #Nested Objects
// Task5
const library = {
    name: 'City Library',
    book : [
        {
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            year: 1937
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        }
]
}
console.log(library);

// Task6
console.log(library.name);
for(i=0; i< library.book.length ; i++){
    console.log(library.book[i].title)
}

// Activity 4  #The this Keyword
// Task7
book.getBookDetails = function(){
return `title is : ${this.title} and year is : ${this.year}`;
};
console.log(book.getBookDetails())


// Activity 5  #Object Iteration
// Task8
for(let i in book){
    if(typeof book[i] === 'function'){
        console.log(`${i}: ${book[i]()}`)
    }else{
        console.log(`${i}: ${book[i]}`)
    }
   
}

// Task9
Object.keys(book).forEach((e)=>{
    console.log(`${e}`)
})

Object.values(book).forEach(value => {
    console.log(typeof value === 'function' ? value() : value);
});

Object.entries(book).forEach(([key, value]) => {
    console.log(key, value)
    // console.log(typeof value === 'function' ? value.call(book) : value);
});