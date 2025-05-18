//routers/books.js

const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController.js');

//run multer BEFORE the post/put,dice a Multer di aspettarsi 1 solo file che è nel campo "cover_image"
router.post('/',  BookController.uploadImgCover.single('cover_image')  ,BookController.storeBook);
router.put('/:id',  BookController.uploadImgCover.single('cover_image')  ,BookController.updateBook);  //:id is the book_id

router.get('/', BookController.indexBook);
router.get('/:id',BookController.showBook); //:id is the book_id
router.delete('/:id',BookController.destroyBook);  //:id is the book_id

module.exports = router;