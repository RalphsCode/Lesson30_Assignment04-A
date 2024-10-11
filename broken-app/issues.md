# Broken App Issues

app and axios should be defined with const - so it cannot be reassigned, and so that its value cannot be changed.

Creating the server should have a callback message indicating that the server is running.

There are no comments in the code. Added some.

The variable names are not descriptive nor helpful. Changed 'out' to response, d to developer and r to user.

Add err argument to catch.

Add Middleware to use JSON.

Change the syntax of out to use JSON in Express.

Change the route function to be Async.

There should also be error catching or try/catch for the api calls, to handle if a username does not exist on GitHub. But I don't have the time to add it, and its not a requirement per the specs.