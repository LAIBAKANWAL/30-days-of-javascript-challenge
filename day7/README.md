# Day 7: Objects

## Object Creation and Access
In JavaScript, objects are fundamental building blocks for structuring data. They are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, functions, or primitive data types.

1. Object Literal Syntax: This is the most common and straightforward way to create an object.
   const book = {
   title: 'The Hobbit',
   author: 'J.R.R. Tolkien',
   year: 1937
   };

2. Using the new Object() Syntax: This is a more verbose way to create an object, using the Object constructor.
   const book = new Object();
   book.title = 'The Hobbit';
   book.author = 'J.R.R. Tolkien';
   book.year = 1937;

## Object Methods
Objects can have functions as properties. These functions are called methods.

### Adding Methods to Objects
You can define methods directly within the object literal

## Nested Objects
Objects can contain other objects, allowing the creation of complex data structures. This is useful for representing related data.


## The this Keyword
In JavaScript, this refers to the object that is executing the current function. In an object method, this refers to the object itself.

## Object Iteration
There are several ways to iterate over the properties of an object.

## Using for...in Loop
The for...in loop iterates over all enumerable properties of an object.

Using Object.keys(), Object.values(), and Object.entries()
These methods allow you to access the keys, values, and key-value pairs of an object, respectively.

Object.keys() returns an array of the object’s keys.

Object.values() returns an array of the object’s values.

Object.entries() returns an array of the object’s key-value pairs.