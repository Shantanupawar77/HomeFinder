import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken';

export const verifyUser=(req,res,next)=>{
    const token=req.cookies.access_token;
    console.log("Token from cookies: ", token); // Debugging log

    if(!token){
          return next(errorHandler(401,"Unauthorized"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,"Forbidden"));
        req.user=user;
        next();

    } )
}