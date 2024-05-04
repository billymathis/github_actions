const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Latest funny man changed from ui now');
});

module.exports = app;  
