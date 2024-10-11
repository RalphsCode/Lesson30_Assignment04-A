const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to use JSON
app.use(express.json()); 

/* Display the GitHub users matching the usernames passed in via the body of the send request. */
app.post('/', async function(req, res, next) {
  try {
    // get the GitHub usernames from the body of the send request
    const results = await Promise.all(
      req.body.developers.map(async developer => {
      return await axios.get(`https://api.github.com/users/${developer}`);
    }) );

    // Loop through the array and present the user name and bio
    const response = results.map(user => ({ name: user.data.name, bio: user.data.bio }));
  

    return res.json(response);

  } catch(err) {
    next(err);
  }
});

// Initiate Server Instance
app.listen(3000, () => {
  console.log("Server is running & listening on port 3000.");
});

