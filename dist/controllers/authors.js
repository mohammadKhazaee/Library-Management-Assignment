"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.putAuthor = exports.getAuthor = exports.postAuthor = exports.getAuthors = void 0;
const authors_service_1 = __importDefault(require("../services/authors.service"));
const getAuthors = async (req, res, next) => {
    try {
        const authors = await authors_service_1.default.getAuthors();
        res.status(200).json({ message: "success", authors });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.getAuthors = getAuthors;
const postAuthor = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body;
        const authorProps = { firstName, lastName };
        // zod validation
        const createdAuthorDoc = await authors_service_1.default.createAuthor(authorProps);
        res.status(201).json({
            message: "author created",
            author: createdAuthorDoc,
        });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.postAuthor = postAuthor;
const getAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const authorDoc = await authors_service_1.default.getAuthor(authorId);
        res.status(200).json({ message: "author fetched", author: authorDoc });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.getAuthor = getAuthor;
const putAuthor = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body;
        const authorId = req.params.id;
        const authorProps = { firstName, lastName };
        await authors_service_1.default.updateAuthor(authorId, authorProps);
        res.status(200).json({
            message: "authoer updated",
        });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.putAuthor = putAuthor;
const deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        await authors_service_1.default.deleteAuthor(authorId);
        res.status(200).json({ message: "author deleted" });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.deleteAuthor = deleteAuthor;
