import express from "express";
import { json } from "body-parser";
import helmet from "helmet";
import compression from "compression";
import "dotenv/config";

import routes from "./routes/routes";
import sequelize from "./shared/utils/database";

const app = express();

app.use(helmet());
app.use(compression());
app.use(json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization"
	);
	next();
});

app.use(routes);

sequelize.sync({ force: true }).then((result) => {
	app.listen(3000);
});
