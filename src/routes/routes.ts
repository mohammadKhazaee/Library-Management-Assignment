import { NextFunction, Request, Response, Router } from "express";

import authorsRoutes from "./authors";
import booksRoutes from "./books";
import ApplicationError from "../shared/utils/errors/applicationError";

const router = Router();

router.use("/authors", authorsRoutes);

router.use("/books", booksRoutes);

router.use((req, res, next) => {
	res.status(404).json({ message: "Page not found." });
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	let status: number;
	console.log(err);

	if (err instanceof ApplicationError) status = err.statusCode;
	else status = 500;

	res.status(500).json({ message: err.message });
});

export default router;
