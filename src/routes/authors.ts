import { Router } from "express";
import {
	deleteAuthor,
	getAuthor,
	getAuthors,
	postAuthor,
	putAuthor,
} from "../controllers/authors";

const router = Router();

// GET /authors
router.get("/", getAuthors);

// POST /authors
router.post("/", postAuthor);

// GET /authors/:id
router.get("/:id", getAuthor);

// PUT /authors/:id
router.put("/:id", putAuthor);

// DELETE /authors/:id
router.delete("/:id", deleteAuthor);

export default router;
