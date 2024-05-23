import mongoose from "mongoose";
import env from "dotenv"
env.config()
let connectionString=process.env.Connection_URI

export let ConnectTodb=async()=>{
    try {
       await mongoose.connect(connectionString)
       console.log("DB Connected Successfully");    
    } catch (error) {
       console.log("failed to connect to Database");    
        
    }
}
