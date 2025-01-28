const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  // Accessing the ID using req.params.id
  const userId = req.params.id;
  // Problem: Assuming userId is always a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});