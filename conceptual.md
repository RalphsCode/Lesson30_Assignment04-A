### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
asynchronous code can be managed with Promises, call-backs, and Async/Await code, each of which handle the async code efficiently.

- What is a Promise?
A promise is where JS 'promises' to return the response from a request, when it has completed the action. It allows JS to keep processing other code while it completes the promise.

- What are the differences between an async function and a regular function?
An Async function is non-linear, in that it is not necessarily completed before JS moves on to working on the next section of code. A regular function on the other hand is linear, and needs to complete prior to moving on to the next section of code. Async functions can use the Await keyword, regular functions can not.

- What is the difference between Node.js and Express.js?
Node.js is a server side platform that allows JS to be used on the server, as opposed to in the browser, where tradition JS operates. Express.js is a web framework that allows Node to process and deploy web pages and HTML code to browsers.

- What is the error-first callback pattern?
It is whereby the functions have the error passed in as the first parameter/argument to the function call. The second argument/parameter is the result of the operation.

- What is middleware?
Middleware refers to code that executes between a request and response in a web application. It can be used for error handing, logging, and authentication.

- What does the `next` function do?
It tells the JS code to move on to the next section of middleware code.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

SOme issues are:
1. It looks like my code from my capstone 1 project, so it is rookie code!
2.  It does not use good Async code handlers such as promise or async/await.
3. the code is repeditive, and could be put into a more efficient structure/function that reduces replication.
4. There is no error handling, so the code could crash, burn, catch on fire and cause the server to blow up! ;)

