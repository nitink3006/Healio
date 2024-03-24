import jwt from "jsonwebtoken";

import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // Get token from headers
  const authToken = req.headers.authorization;

  // Check token is exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    //console.log(authToken); // Logging token for debugging (not ideal for production)
    
    const token = authToken.split(" ")[1];

    //Token verify
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

    req.userId = decoded.id
    req.role = decoded.role
    
    next();
     // Incomplete code - missing token verification
  } catch (err) {

    if(err.name=='TokenExpiredError'){
        return res.status(401).json({message:"Token expired"})
    }
    return res.status(401).json({success:false, message:"Invalid Token"})
  } 
};


//security
export const restrict = roles =>  async(req,res,next)=>{
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)
    
    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false, message:"You are not authorized"})
    }

    next();
};
