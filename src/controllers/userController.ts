import { Request, Response } from "express";
import users from "../constants/users.json";

export const getAllUsers = (req: Request, res: Response) => {
	/*
		#swagger.tags = ['User']
	*/
	try {
		const allUsers = users.users;
		res.status(200).json(allUsers);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

export const getUserById = (req: Request, res: Response) => {
	/*
		#swagger.tags = ['User']
	*/
	try {
		const { id } = req.params;
		const user = users.users.find((user) => user.id === parseInt(id));
		if (!user) {
			res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
