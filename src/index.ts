import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./routes/user";
import postRoutes from "./routes/post";
import swaggerDocument from "./swagger_output.json";

const app: Application = express();
const port = 3000;

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", postRoutes);

// Serve the Swagger UI using the generated swagger file
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
