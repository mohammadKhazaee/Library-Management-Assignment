import { Router } from "express";

const router = Router();

// GET /books
router.get("/");

// POST /books
router.post("/");

// GET /books/:id
router.get("/:id");

// PUT /books/:id
router.put("/:id");

// DELETE /books/:id
router.delete("/:id");

export default router;
