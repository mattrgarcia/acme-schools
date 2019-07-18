const {
  syncAndSeed
} = require('./db')
const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/dist', express.static(path.join(__dirname,'dist')))


app.get('/', (req, res, next) =>{
  res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(port, ()=> `Server running on port ${port}`);
app.use('/api', require('./api'))

syncAndSeed();
