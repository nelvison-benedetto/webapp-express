//app.js

const express = require('express')
const app = express()
require('dotenv').config();  //before HOST and PORT
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const cors = require('cors');  //enables the Cross-Origin Resource Sharing
const path = require('path');  //to work with file paths and directories

const BookRouter = require('./routers/books.js');
const connection = require('./db/connection.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');

app.use(express.json());  //enables requests in json format
app.use(cors());
app.use('/imgcover', express.static(path.join(__dirname, 'public/imgcover')));  //serves file in the 'public/imgcover' folder when requested with urls containing "/imgcover"

app.listen(PORT,(req,res)=>{
  console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get('/',(req,res)=>{ res.send('Main Page')});
app.use('/:slug',BookRouter);
app.use(notFoundMiddleware);  //displays "404 Not Found" for undefined routes

