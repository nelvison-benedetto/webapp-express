//routers/reviews.js
const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController.js');

router.get('/',ReviewController.indexReview);
router.post('/:id',ReviewController.storeReview);  //:id is the book_id
router.put('/:id',ReviewController.updateReview);  //:id is the review_id
router.get('/:id',ReviewController.showReviewsBook);   //:id is the book_id
router.delete('/:id',ReviewController.deleteReview);  //:id is the review_id

module.exports = router;