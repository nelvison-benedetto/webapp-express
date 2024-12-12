const notFoundMiddleware = (req,res,next)=>{
    res.status(404).json({
        status: 404,
        success : false,
        error : '404 Page Not Found'
    });
}
module.exports = notFoundMiddleware;