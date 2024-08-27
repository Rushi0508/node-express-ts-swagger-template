import express from "express";
import { getAllPosts, getPostById } from "../controllers/postController";

const router = express.Router();

router.route("/posts").get(getAllPosts);

router.route("/posts/:id").get(getPostById);

export default router;
