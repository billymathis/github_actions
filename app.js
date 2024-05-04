const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Deployed through Github Actions!!!');
});

module.exports = app;  
