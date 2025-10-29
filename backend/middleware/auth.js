import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next)=>{
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.json({success: false, message: "not authorized"});
  }
  // support "Bearer <token>" or raw token
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.id || payload; // support old/new payload shapes
    if(!userId){
      return res.json({success: false, message: "not authorized"});
    }
    req.user = await User.findById(userId).select("-password");
    if(!req.user){
      return res.json({success: false, message: "not authorized"});
    }
    next();
  } catch (error) {
    return res.json({success: false, message: "not authorized"});
  }
}
