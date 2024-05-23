import express from 'express'
import {login,logout,signup} from "../Controllers/AuthControllers.js"
let router = express.Router()


router.post('/signup',signup)


router.post('/login',login)


router.delete('/logout',logout)

export default router  
