// this is a JWT authentication middleware in Express.
import jwt from 'jsonwebtoken'


export const authSeller=(req,resp,next)=>{        
     try {
        const {sellerToken}=req.cookies;                
        if(!sellerToken){
              return resp.status(401).json({message:"UnAuthorize" ,success:false})
        }
        const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
        if (decoded.email === process.env.SELLER_EMAIL) {
            return next();
        }
        return resp.status(401).json({ message: "Unauthorize", success: false });
    } catch (error) {
        console.log(error);
        return resp.status(401).json({ message: "Unauthorize", success: false });
    }
}
