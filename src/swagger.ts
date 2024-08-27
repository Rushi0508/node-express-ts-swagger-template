// src/swagger.ts
import swaggerAutogen from "swagger-autogen";

const doc = {
	info: {
		title: "Express API with Swagger",
		description: "Automatically generated Swagger docs",
	},
	host: "localhost:3000",
	schemes: ["http"],
	tags: [
		{
			name: "User",
			description: "Endpoints related to user operations",
		},
		{
			name: "Post",
			description: "Endpoints related to post operations",
		},
	],
};

const outputFile = "./swagger_output.json"; // Output file for the swagger spec
const endpointsFiles = ["./src/index.ts"]; // Entry point for your routes

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
	require("./index"); // Start the server after swagger generation
});
