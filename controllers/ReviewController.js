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
        if(err) return res.status(500).json({error:err});ù
        const reviewId = result.insertId;  //generated by mysql with AUTO INCREMENT
        return res.status(201).json({
            message: 'Review created successfully',
            data: {
                id: reviewId,
                book_id,name,rating,review
            }
        });
    });
};

const updateReview = (req,res)=>{
    const reviewId = Number(req.params.id);
    const {book_id,name,rating,review} = req.body;
    const query = `
        UPDATE review
        SET
            name = COALESCE(?,name),
            rating = COALESCE(?,rating),
            review = COALESCE(?,review)
        WHERE id = ?
    `;

};