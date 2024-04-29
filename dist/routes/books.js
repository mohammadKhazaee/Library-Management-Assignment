"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_1 = require("../controllers/books");
const router = (0, express_1.Router)();
// GET /books
router.get("/", books_1.getBooks);
// POST /books
router.post("/", books_1.postBook);
// GET /books/:id
router.get("/:id", books_1.getBook);
// PUT /books/:id
router.put("/:id", books_1.putBook);
// DELETE /books/:id
router.delete("/:id", books_1.deleteBook);
exports.default = router;
