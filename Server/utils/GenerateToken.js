import jwt from "jsonwebtoken"
import env from 'dotenv'
env.config()
let SecretToken="Sa5FAzJVPOwkxVLqUMXisWwuRXYbSMmSw/DtxPvRFlA"

const generateTokenAndSetCookie=(userId,res)=>{
    const token =jwt.sign({userId},SecretToken,{
        expiresIn:"15d"
    })
    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000, //ms
        httpOnly:true, //prevent xss attacks
        sameSite:"strict", //prevent CSRF Attacks
        secure:process.env.NODE_ENV !=="development"
    })
}

export default generateTokenAndSetCookie
