import express  from "express"
import env  from "dotenv"
env.config()
let port= process.env.PORT || 3000
let app=express();
import authRoutes from "./Routers/AuthRouter.js"


app.get("/",(req, res)=>{
    res.send("Welcome to the Backend")
})
app.use("/api/auth",authRoutes)

app.listen(port,()=>{
    console.log('server is running on port', port)
})  