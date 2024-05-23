import express  from "express"
import env  from "dotenv"
import authRoutes from "./Routers/AuthRouter.js"
import MessageRoutes from "./Routers/MessageRoutes.js"
import cookieParser from "cookie-parser"
import userRoutes from "./Routers/userRouter.js"
import { ConnectTodb } from "./db/connectToDB.js"
let port= process.env.PORT || 3000
let app=express();
app.use(express.json())
app.use(cookieParser())
env.config()


app.use("/api/auth",authRoutes)
app.use("/api/messages",MessageRoutes)
app.use("/api/users",userRoutes)





app.listen(port,()=>{
ConnectTodb()
    console.log('server is running on port', port)
})  