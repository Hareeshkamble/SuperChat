import express from "express"
import { getUsersforSideBar } from "../Controllers/userController.js"
import protectRoute from "../Middlewares/protectRoute.js"

let router = express.Router()

router.get("/",protectRoute,getUsersforSideBar)
export default router