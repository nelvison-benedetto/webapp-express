//app.js
const express = require('express')
const app = express()
require('dotenv').config();  //before HOST and PORT
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const cors = require('cors');  //enables the Cross-Origin Resource Sharing
const path = require('path');  //to work with file paths and directories

const BookRouter = require('./routers/books.js');
const ReviewController = require('./routers/reviews.js');
const connection = require('./db/connection.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');

//Middleware
app.use(express.json());  //enables requests in json format
app.use(cors());  //for Cross-Origin Resource Sharing
app.use('/imgcover', express.static(path.join(__dirname, 'public/imgcover')));  //serves file in the 'public/imgcover' folder when requested with urls containing "/imgcover"

//Routes
app.get('/',(req,res)=>{ res.send('Main Page')});
app.use('/book',BookRouter);   ///books/:slug creates conflicts with the :id
app.use('/review',ReviewController);  ///reviews/:slug creates conflicts with the :id
app.use(notFoundMiddleware);  //handle 404 for undefined routes

//Start the server
app.listen(PORT,(req,res)=>{
  console.log(`Server is running at ${HOST}:${PORT}`);
});


