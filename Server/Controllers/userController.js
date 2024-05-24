import User from "../Models/UserModel.js";

export  let getUsersforSideBar=async(req,res)=>{
try {

    const LoggedInUserId= req.user._id
    const filteredUsers= await User.find({_id:{$ne:LoggedInUserId}}).select("-cpassword") // this means it will not send msg to himself
    res.status(200).send(filteredUsers)
} catch (error) {
    console.error("error in getUsersforSideBar",error.message);
    res.status(401).send({error: "Internal Server Error"}); 
    
}
}