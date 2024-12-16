//controllers/ReviewController.js

const connection = require('../db/connection.js');

const storeReview = (req,res)=>{
    const {book_id,name,rating,review} = req.body;
    const query = `
        INSERT INTO reviews (book_id,name,rating,review)
        VALUES (?,?,?,?)
    `;
    const params = [book_id,name,rating,review];
    connection.query(query,params,(err,result)=>{
        if(err) return res.status(500).json({error:err});
        const reviewId = result.insertId;  //generated by mysql with AUTO INCREMENT
        return res.status(201).json({
            message: `Review ${reviewId} created successfully`,
            data: {
                id: reviewId,
                book_id,name,rating,review
            }
        });
    });
};

const updateReview = (req,res)=>{
    const reviewId = Number(req.params.id);
    const {name,rating,review} = req.body;
    const query = `
        UPDATE reviews
        SET
            name = COALESCE(?,name),
            rating = COALESCE(?,rating),
            review = COALESCE(?,review)
        WHERE id = ?   
    `;
    const params = [name,rating,review, reviewId]; //!!Also reviewId x "WHERE id = ?" !!
    connection.query(query,params,(err,result)=>{
        if(err) return res.status(500).json({error:err});
        if(result.affectedRows===0){
            return res.status(404).json({error: 'review not found'});
        }
        return res.status(200).json({message: `review ${reviewId} updated successfully`});
    });
};

const deleteReview = (req,res)=>{
    const reviewId = Number(req.params.id);
    const query = `DELETE FROM reviews WHERE id = ?`;
    connection.query(query,[reviewId],(err,result)=>{  //[reviewId] x "WHERE id = ?"
        if(err) return res.status(500).json({error:err});
        if(result.affectedRows===0){
            return res.status(404).json({error:'review not found'});
        }
        return res.status(200).json({message:`review ${reviewId} deleted successfully.`});
    });
};

const showReviewsBook = (req,res)=>{
    const bookId = Number(req.params.id);
    const query = `SELECT * FROM reviews WHERE book_id=?`;
    connection.query(query,[bookId],(err,result)=>{
        if(err) return res.status(500).json({error:err});
        if(result.length===0){
            return res.status(404).json({error:'no reviews found for this book'});
        }
        return res.status(200).json({data:result});
    });
};

module.exports = {
    storeReview,
    updateReview,
    deleteReview,
    showReviewsBook,
};