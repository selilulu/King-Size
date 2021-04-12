import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const protect = async(req, res, next)=>{
    let token;

    if (
        req.headers.authorization  &&
        req.headers.authorization.startsWith("Bearer")
    ){

        token= req.headers.authorization.split(" ")[1];
    }
    if (!token){
        res
        .status(401)
        .json({success: false, error: "Not authoriwed to acces this route"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "d946f6ba67f95bc7d8df1013e83fbe57476b6fb239b76d4273d68ddb5834f41d5b7576");
        const user = await User.findById(decoded.id);
        if(!user){
            res
       .status(404)
       .json({success: false, error: "No user found with this id"});
        }
        req.user = user;
        next();
    
    }
    catch (error){
        res
       .status(401)
       .json({success: false, error: "Not authorized to access this route"});
    }
}
export default protect;