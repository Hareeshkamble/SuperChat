// import  Jwt  from "jsonwebtoken";
// import env from "dotenv"
// env.config()
// import User from "../Models/UserModel.js";


// const protectRoute=async(req,res,next)=>{
// try {
//     let token= req.cookies.jwt
//     if(!token){
//         res.status(401).send({error: "unauthorized - no takon provided"}); 
//     }
//    let decoded= Jwt.verify(token,process.env.SecretToken)
//    if(!decoded){
//     res.status(401).send({error: "unauthorized -  invalid Token"}); 

//    }
// const user = await User.findById(decoded.userId).select("-password")
// if(!user){
//     res.status(401).send({error: "User Not found"}); 
// }
// req.user=user
// next()
// } catch (error) {
//     console.log("error in Protected_Route middleware", error.message);
//     res.status(500).send({error:"error occurred while msg sending"})
// }
// }

// export default protectRoute


// !chatu gpt
import Jwt from "jsonwebtoken";
import env from "dotenv";
env.config();
import User from "../Models/UserModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).send({ error: "Unauthorized - no token provided" });
    }

    const decoded = Jwt.verify(token, process.env.SecretToken);

    if (!decoded) {
      return res.status(401).send({ error: "Unauthorized - invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).send({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in Protected_Route middleware:", error.message);
    return res.status(500).send({ error: "Error occurred while processing the request" });
  }
};

export default protectRoute;
