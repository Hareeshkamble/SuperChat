import Conversation from "../Models/ConversationModels.js"
import Message from "../Models/Message.model.js"

 const sendMessage = async (req, res) => {
   try {
      let {message}= req.body 
      let receiverId =req.params.id
      let senderId=req.user._id

 const  conversation =await Conversation.findOne({
   participants:{$all:[senderId,receiverId]}
 })
 if(!conversation){
   conversation = await Conversation.create({
      participants:[senderId,receiverId]

   })
 }
 let newMessage= await Message.create({
   senderId,
   receiverId,
   message
 })

 if(newMessage){
conversation.messages.push(newMessage._id)
 }

//Socket IO Functionality

//!this will run in parallallyyy
await Promise.all([conversation.save(),newMessage.save()])
 res.status(201).send(newMessage)
   } catch (error) {
      console.log("error in message controller", error);
      res.status(500).send({error:"error occurred while msg sending"})
   }
}

export const getMessages = async (req, res) => {
  try {
    let { id:userChatId } = req.params;
    const senderId = req.user._id;
    let conversations = await Conversation.findOne({
      participants: { $all: [senderId, userChatId] }
    }).populate("messages"); 

    if (!conversations) {
      return res.status(404).send({ error: "Conversation not found" });
    }
    const messages = conversations.messages

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in Get message controller", error);
    res.status(500).send({ error: "error occurred while getting messages" });
  }
};

export default sendMessage;