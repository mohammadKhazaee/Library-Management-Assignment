"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_1 = require("../controllers/authors");
const router = (0, express_1.Router)();
// GET /authors
router.get("/", authors_1.getAuthors);
// POST /authors
router.post("/", authors_1.postAuthor);
// GET /authors/:id
router.get("/:id", authors_1.getAuthor);
// PUT /authors/:id
router.put("/:id", authors_1.putAuthor);
// DELETE /authors/:id
router.delete("/:id", authors_1.deleteAuthor);
exports.default = router;
