const AsyncHandler = (Fun) => async (req, res, next) => {
  Promise.resolve(Fun(req, res, next)).catch(next);
};

module.exports = AsyncHandler;

/*
const AsyncHandler = (Fun) =>async(req,res,next)=>{
    try{
         await Fun(req,res,next)
         next() 
    }catch(error){
        return res.status(error.statusCode || 500)
        .json({
            success:false,message:error.message
        })
    }
}
*/
