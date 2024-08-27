import express from "express";
import { getAllUsers, getUserById } from "../controllers/userController";
const router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/user/:id").get(getUserById);

export default router;
