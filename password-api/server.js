const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for password strength checking
app.post('/api/password-strength', (req, res) => {
  const { password } = req.body;

  // Perform password strength checking logic here
  // For simplicity, let's just send back the received password
  res.json({ password });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
