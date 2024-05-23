// import mongoose from 'mongoose';

// const MessageSchema = new mongoose.Schema({
//     senderId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true

//     },
//     revicerId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
        
//     },
//     message:{
//         type:String,
//         required:true
//     }
// },{timestamps:true})

// let Message=mongoose.model("Message",MessageSchema);

// export default Message

import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {  // Fixed typo: "revicerId" -> "receiverId"
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,  // Removed quotes around String
        required: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);

export default Message;  // Added semicolon to terminate statement
