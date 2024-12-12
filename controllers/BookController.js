//controllers/BookController.js

const fs = require('fs');  //already in node.js
const path = require('path');  //already in node.js
const multer = require('multer');  //x upload file img on server(express)
const connection = require('../db/connection.js');

const pathImgCover = path.join(__dirname, '../public/imgcover');
const DB_NAMEDB = process.env.DB_NAMEDB;

console.log(`DB_NAMEDB is: ${DB_NAMEDB}`);
//Set Multer x upload imgs to the express backend
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, pathImgCover);
    },
    filename : (req, file, cb)=>{
        const unique = Date.now()%1e5 + Math.round(Math.random() * 1e5);
        cb(null, `${unique}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage : storage});

const index = (req,res)=>{
    const query = `SELECT * FROM books`;
    connection.query(query, (err,results)=>{
        if(err) return res.status(500).json({error:err});
        return res.status(200).json({
            data : results,
            counter : results.length
        });
    });
};

const show = (req,res)=>{
    const bookId = Number(req.params.id);
    const query = `SELECT * FROM books WHERE id=?`;
    connection.query(query, [bookId],(err,results)=>{
        if(err) return res.status(500).json({error:err});
        if(results.length ===0 || !results[0]){  //is the same thing
            return res.status(404).json({error:'404 Not Found'});
        }
        return res.status(200).json({data:results[0]});
    });
}

const destroy = (req,res)=>{  //!!also modify the other tables
    const bookId = Number(req.params.id);
    const query = `DELETE from books WHERE id=?`;
    connection.query(query,[bookId],(err,results)=>{
        if(err) return res.status(500).json({error:err});
        if(results.affectedRows===0){
            return res.status(404).json({error:'404 Not Found'});
        }
        return res.status(200).json({
            message: `Book id ${bookId} deleted successfully`
        });
    });
}

module.exports = {
    index,
    show,
    destroy,
    upload  //x Multer imgs
}