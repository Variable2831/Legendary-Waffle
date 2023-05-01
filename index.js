// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create the express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate login credentials here...

  // Return a response to the client
  res.status(200).json({ message: 'Login successful!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
