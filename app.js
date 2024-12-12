//app.js

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const express = require('express')
const app = express()
require('dotenv').config();

const cors = require('cors');
const path = require('path');

const BookRouter = require('./routers/books.js');
const connection = require('./db/connection.js');

app.use(express.json());
app.use(cors());
app.use('/imgcover', express.static(path.join(__dirname, 'public/imgcover')));  //X UPLOAD FILE ON SERVER

app.listen(PORT,(req,res)=>{
  console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get('/',(req,res)=>{ res.send('Main Page')});
app.use('/:slug',BookRouter);