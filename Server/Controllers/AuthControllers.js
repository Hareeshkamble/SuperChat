// {
//     // import User from "../Models/UserModel.js"
// // import bcrypt from "bcryptjs"
// // import generateTokenAndSetCookie from "../utils/GenerateToken.js"

// // let signup=async(req,res)=>{
// // try {
// //     let {fullName,username,password,confirmPassword,gender}=req.body
// // if(password !== confirmPassword){
// // return res.status(400).json({error: 'password is not matched  '})
// // }

// // let userAvailable= await User.findOne({username})
// // if(userAvailable){
// //     return res.status(400).json({error: 'this user is already exist  '})
// // }
// // // Hashed The Password 
// // let salt= await bcrypt.genSalt(10)
// // let hashedPassword= await bcrypt.hash(password,salt)

// // // Profile Pic for Boy and Girls
// // let BoyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
// // let GirlprofilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

// // let newUser= await User.create({
// //     fullName,
// //     username,
// //     password:hashedPassword,
// //     gender,
// //     profilePic:gender==="male"? BoyprofilePic:GirlprofilePic
// // })
// // if(newUser){
// //  generateTokenAndSetCookie(newUser._id,res)
// // await newUser.save() //!saves the user in db
// // res.status(200).json({newUser})
// // }
// // } catch (error) {
// //     console.log("Got this error in during the creating new User",error.message)
// //     res.status(500).json({
// //         error: "error occured while creating Newuser",
// //     })
// // }
// // }


// // let login=async(req,res)=>{
// // try {
// //     let {username,password}=req.body
// //     let user=await User.find({username})
// //     const ispasswordCorrect= await bcrypt.compare(password,user.password)
// //     if(!user || !ispasswordCorrect){
// //        return res.status(400).json({error: "Invalid Credentials wrong username or else wrong Password"}) 
// //     }
// //     generateTokenAndSetCookie(user._id,res)

// //     res.status(200).json({user})

// // } catch (error) {
// //        console.log("Got this error in Login function",error.message)
// //     res.status(500).json({
// //         error: "error occured while Login ",
// //     })
// // }
// // }

// // let logout=async(req,res)=>{
// //     res.send("for logout User ")
// // }

// // export {
// //     login,
// //     signup,
// //     logout
// // }
// }

import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/GenerateToken.js";
let signup=async(req,res)=>{
    try {
        let {fullName,username,password,confirmPassword,gender}=req.body
    if(password !== confirmPassword){
    return res.status(400).json({error: 'password is not matched  '})
    }
    
    let userAvailable= await User.findOne({username})
    if(userAvailable){
        return res.status(400).json({error: 'this user is already exist  '})
    }
    // Hashed The Password 
    let salt= await bcrypt.genSalt(10)
    let hashedPassword= await bcrypt.hash(password,salt)
    
    // Profile Pic for Boy and Girls
    let BoyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    let GirlprofilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
    
    let newUser= await User.create({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==="male"? BoyprofilePic:GirlprofilePic
    })
    if(newUser){
     generateTokenAndSetCookie(newUser._id,res)
    await newUser.save() //!saves the user in db
    res.status(200).json({newUser})
    }
    } catch (error) {
        console.log("Got this error in during the creating new User",error.message)
        res.status(500).json({
            error: "error occured while creating Newuser",
        })
    }
    }

 
let login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user?.password||"");

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

    generateTokenAndSetCookie(user._id, res);
        res.status(200).json({user});
    } catch (error) {
        console.log("Error occurred during login:", error.message);
        res.status(500).json({
            error: "An error occurred while logging in",
        });
    }
};

let logout = async (req, res) => {
try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).send("Logged Out Successfully")
} catch (error) {
    console.log("Error occurred during Logout:", error.message);
        res.status(500).json({
            error: "An error occurred while logoutt in",
        });
}
};

export {
    login,
    signup,
    logout
};
