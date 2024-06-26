// import User from "../Models/UserModel.js";

// export  let getUsersforSideBar=async(req,res)=>{
// try {

//     const LoggedInUserId= req.user._id
//     const filteredUsers= await User.find({_id:{$ne:LoggedInUserId}}).select("-password") // this means it will not send msg to himself
//     res.status(200).send(filteredUsers)
// } catch (error) {
//     console.error("error in getUsersforSideBar",error.message);
//     res.status(401).send({error: "Internal Server Error"}); 
    
// }
// }

// !CHAT GPT CODE 

import User from "../Models/UserModel.js";

export const getUsersforSideBar = async (req, res) => {
  try {
    const LoggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: LoggedInUserId } }).select("-password"); // exclude password field

    res.status(200).send(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersforSideBar:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
