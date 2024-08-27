import { Request, Response } from "express";
import posts from "../constants/posts.json";

export const getAllPosts = (req: Request, res: Response) => {
	/*
        #swagger.tags = ['Post']
    */
	try {
		const allPosts = posts.posts;
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

export const getPostById = (req: Request, res: Response) => {
	/*
        #swagger.tags = ['Post']
    */
	try {
		const { id } = req.params;
		const post = posts.posts.find((post) => post.id === parseInt(id));
		if (!post) {
			res.status(404).json({ message: "Post not found" });
		}
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
