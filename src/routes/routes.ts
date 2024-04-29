import { NextFunction, Request, Response, Router } from "express";

import authorsRoutes from "./authors";
import booksRoutes from "./books";

const router = Router();

router.use("/authors", authorsRoutes);

router.use("/books", booksRoutes);

router.use((req, res, next) => {
	res.status(404).json({ message: "Page not found." });
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	// const status = err.statusCode || 500;
	// if (err.statusCode === 500) {
	// 	console.log(err);
	// 	return res.status(status).json({ message: "something went wrong" });
	// }
	res.status(500).json({ message: err.message });
});

export default router;
