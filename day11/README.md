# Day 11: Promises and Async:Await

## Understanding Promises
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:

* Pending: Initial state, neither fulfilled nor rejected.
* Fulfilled: Operation completed successfully.
* Rejected: Operation failed.

A Promise provides methods to handle asynchronous results:

* then(onFulfilled, onRejected): Attaches callbacks for the resolution (success) and rejection (failure) of the Promise.
* catch(onRejected): Attaches a callback for only the rejection of the Promise.
* finally(onFinally): Attaches a callback that is invoked when the Promise is settled, regardless of the outcome.


## Chaining Promises
Promises can be chained to perform multiple asynchronous operations in sequence. Each .then() returns a new Promise, allowing for further chaining.

## Using Async/Await
async and await provide a more readable and straightforward way to work with Promises. An async function always returns a Promise, and await pauses the function execution until the Promise is resolved.


## Fetching Data From an API
Using fetch with Promises or async/await is a common way to retrieve data from an API.


## Concurrent Promises
Sometimes, you need to perform multiple asynchronous operations in parallel and wait for all of them to complete. Promise.all and Promise.allSettled are useful for such scenarios.

* Promise.all(iterable): Waits for all Promises in the iterable to be fulfilled or for one to be rejected.

* Promise.race(iterable): Waits until any one of the Promises is fulfilled or rejected
