const {
  syncAndSeed
} = require('./db')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
app.use('/api', require('./api'))

syncAndSeed();