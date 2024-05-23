// MessageRoutes.js

import express from "express";
import sendMessage, { getMessages }  from "../Controllers/Message.Controller.js"; // Import as named export
import protectRoute from "../Middlewares/protectRoute.js";
let router = express.Router();
router.get('/:id', protectRoute,getMessages);

router.post('/send/:id', protectRoute,sendMessage);


export default router;
