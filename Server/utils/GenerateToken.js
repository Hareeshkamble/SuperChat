// import jwt from "jsonwebtoken"
// import env from 'dotenv'
// env.config()
// // let SecretToken="Sa5FAzJVPOwkxVLqUMXisWwuRXYbSMmSw/DtxPvRFlA"

// const generateTokenAndSetCookie=(userId,res)=>{
//     const token =jwt.sign({userId},process.env.SecretToken,{
//         expiresIn:"15d"
//     })
//     res.cookie("jwt",token,{
//         maxAge:15 * 24 * 60 * 60 * 1000, //ms
//         httpOnly:true, //prevent xss attacks
//         sameSite:"strict", //prevent CSRF Attacks
//         secure:process.env.NODE_ENV !=="development"
//     })
// }

// export default generateTokenAndSetCookie


// !chatgpt
import jwt from "jsonwebtoken";
import env from 'dotenv';
env.config();

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SecretToken, {
    expiresIn: "15d"
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // Prevent XSS attacks
    sameSite: "strict", // Prevent CSRF attacks
    secure: process.env.NODE_ENV !== "development" // Use secure cookies in production
  });
};

export default generateTokenAndSetCookie;
