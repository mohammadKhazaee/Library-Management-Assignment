"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_1 = require("../controllers/authors");
const router = (0, express_1.Router)();
// GET /authors
router.get("/", authors_1.getAuthors);
// POST /authors
router.post("/");
// GET /authors/:id
router.get("/:id");
// PUT /authors/:id
router.put("/:id");
// DELETE /authors/:id
router.delete("/:id");
exports.default = router;
