//routers/reviews.js
const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController.js');

router.post('/',ReviewController.storeReview);
router.put('/:id',ReviewController.updateReview);
router.get('/:id',ReviewController.showReviewsBook);
router.delete('/:id',ReviewController.deleteReview);

module.exports = router;