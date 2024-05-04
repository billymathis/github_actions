const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Latest new');
});

module.exports = app;  
