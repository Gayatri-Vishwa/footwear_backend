// this is a JWT authentication middleware in Express.
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const authUser=(req,resp,next)=>{         
    try {
        const {token}=req.cookies;               
        if(!token){
              return resp.status(401).json({message:"UnAuthorize" ,success:false})
        }
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        req.user= decoded.id;
        next();                               
        
    } catch (error) {
        console.log(error)
        return resp.status(401).json({message:"UnAuthorize" ,success:false})
    }
}


