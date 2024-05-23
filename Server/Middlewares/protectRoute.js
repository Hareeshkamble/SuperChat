import  Jwt  from "jsonwebtoken";
import env from "dotenv"
import User from "../Models/UserModel.js";
let SecretToken="Sa5FAzJVPOwkxVLqUMXisWwuRXYbSMmSw/DtxPvRFlA"

const protectRoute=async(req,res,next)=>{
try {
    let token= req.cookies.jwt
    if(!token){
        res.status(401).send({error: "unauthorized - no takon provided"}); 
    }
   let decoded= Jwt.verify(token,SecretToken)
   if(!decoded){
    res.status(401).send({error: "unauthorized -  invalid Token"}); 

   }
const user = await User.findById(decoded.userId).select("-password")
if(!user){
    res.status(401).send({error: "User Not found"}); 
}
req.user=user
next()
} catch (error) {
    console.log("error in Protected_Route", error.message);
    res.status(500).send({error:"error occurred while msg sending"})
}
}

export default protectRoute