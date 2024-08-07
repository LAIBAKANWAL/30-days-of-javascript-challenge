# Day 12: Error Handling 

Error handling is a critical aspect of programming that helps maintain the robustness and reliability of applications. In JavaScript, errors can be managed using various techniques and constructs. 

## Basic Error Handling with Try-Catch
The try-catch statement allows you to test a block of code for errors. If an error occurs, the catch block can handle the error gracefully.

### Explanation
* try Block: Contains code that may throw an error.
* catch Block: Executes if an error occurs in the try block. The error object provides details about the error.


## Finally Block
The finally block is used to execute code after the try and catch blocks, regardless of whether an error occurred. This is useful for cleanup tasks.

Explanation
* The finally block runs whether or not an error occurred, making it ideal for cleanup tasks like closing connections or freeing up resources.


## Custom Error Objects
Creating custom error objects allows for more descriptive and specific error handling. Custom errors extend the built-in Error class.

### Explanation
* CustomError Class: Extends the built-in Error class and allows for custom error messages and types.
* Usage: Custom errors can be thrown and caught like any other error, enabling more specific error handling.


## Error Handling in Promises
Promises provide a cleaner way to handle asynchronous operations. Errors in promises can be caught using the .catch method.

### Explanation
* Promise: Represents an asynchronous operation.
* .then Method: Handles the resolved value of the promise.
* .catch Method: Catches and handles any errors that occur during the promise execution.


## Graceful Error Handling in Fetch
When making network requests using fetch, errors can occur due to network issues or non-2xx responses. These can be handled gracefully using promises.

## Explanation
* Fetch Request: Initiates a network request.
* Response Check: Checks if the response status is not okay and throws an error if it's not.
* JSON Parsing: Parses the response body as JSON.
* Error Handling: Catches and handles any errors that occur during the fetch request or JSON parsing.
