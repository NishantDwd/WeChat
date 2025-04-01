import express from 'express';
import { getMessage, sendMessage } from '../Controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();


router.post("/send/:id",protectRoute,sendMessage); //  protectRoute is Authorization process (check if user logged in)
router.get("/:id",protectRoute,getMessage);

export default router;
