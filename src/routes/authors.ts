import { Router } from "express";
import { authorControllerFactory as controllerFactory } from "../controllers/authors";

const router = Router();

// GET /authors
router.get("/", controllerFactory("getAuthors"));

// POST /authors
router.post("/", controllerFactory("postAuthor"));

// GET /authors/:id
router.get("/:id", controllerFactory("getAuthor"));

// PUT /authors/:id
router.put("/:id", controllerFactory("putAuthor"));

// DELETE /authors/:id
router.delete("/:id", controllerFactory("deleteAuthor"));

export default router;
