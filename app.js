const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Latest funny man');
});

module.exports = app;  
