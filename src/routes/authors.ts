import { Router } from "express";
import { getAuthors } from "../controllers/authors";

const router = Router();

// GET /authors
router.get("/", getAuthors);

// POST /authors
router.post("/");

// GET /authors/:id
router.get("/:id");

// PUT /authors/:id
router.put("/:id");

// DELETE /authors/:id
router.delete("/:id");

export default router;
