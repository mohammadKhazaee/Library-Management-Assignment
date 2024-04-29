import { Router } from "express";
import {
	deleteBook,
	getBook,
	getBooks,
	postBook,
	putBook,
} from "../controllers/books";

const router = Router();

// GET /books
router.get("/", getBooks);

// POST /books
router.post("/", postBook);

// GET /books/:id
router.get("/:id", getBook);

// PUT /books/:id
router.put("/:id", putBook);

// DELETE /books/:id
router.delete("/:id", deleteBook);

export default router;
