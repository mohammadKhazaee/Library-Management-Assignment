"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_1 = __importDefault(require("./authors"));
const books_1 = __importDefault(require("./books"));
const router = (0, express_1.Router)();
router.use("/authors", authors_1.default);
router.use("/books", books_1.default);
router.use((req, res, next) => {
    res.status(404).json({ message: "Page not found." });
});
router.use((err, req, res, next) => {
    // const status = err.statusCode || 500;
    // if (err.statusCode === 500) {
    // 	console.log(err);
    // 	return res.status(status).json({ message: "something went wrong" });
    // }
    // res.status(status).json({ message: err.message });
});
exports.default = router;
