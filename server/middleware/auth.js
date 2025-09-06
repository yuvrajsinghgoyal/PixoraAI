

import jwt from "jsonwebtoken";

//in user auth middleware that will find user id from the token and it will add the user id in the request bidy 
const userAuth = async(req,res,next)=>{
    const {token}=req.headers;

    if(!token){
        return res.json({success:false , message : "not authrized"})
    }

    try {
        
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success:false ,message:'Not Authorized Login again '})
        }
        next();

    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

export default userAuth;