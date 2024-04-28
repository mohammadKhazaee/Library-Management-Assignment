"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
