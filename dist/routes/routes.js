"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_1 = __importDefault(require("./authors"));
const books_1 = __importDefault(require("./books"));
const applicationError_1 = __importDefault(require("../shared/utils/errors/applicationError"));
const router = (0, express_1.Router)();
router.use("/authors", authors_1.default);
router.use("/books", books_1.default);
router.use((req, res, next) => {
    res.status(404).json({ message: "Page not found." });
});
router.use((err, req, res, next) => {
    let status;
    console.log(err);
    if (err instanceof applicationError_1.default) {
        status = err.statusCode;
    }
    else
        status = 500;
    res.status(status).json({ message: err.message });
});
exports.default = router;
