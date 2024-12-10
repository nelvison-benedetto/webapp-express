//routers/books.js

const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController.js');

router.get('/', BookController.index);
router.get('/:id',BookController.show);
router.post('/',BookController.store);
router.put('/:id', BookController.update);
router.delete('/:id',BookController.destroy);

module.exports = router;