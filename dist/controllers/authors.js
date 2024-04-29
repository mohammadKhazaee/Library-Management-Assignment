"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.putAuthor = exports.getAuthor = exports.postAuthor = exports.getAuthors = void 0;
const authors_service_1 = __importDefault(require("../services/authors.service"));
const authorValidator_1 = __importDefault(require("../shared/utils/validators/authorValidator"));
const getAuthors = async (req, res, next) => {
    try {
        const authorValidator = new authorValidator_1.default();
        const authorService = new authors_service_1.default(authorValidator);
        const authors = await authorService.getAuthors();
        res.status(200).json({ message: "success", authors });
    }
    catch (err) {
        next(err);
    }
};
exports.getAuthors = getAuthors;
const postAuthor = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body;
        const authorProps = { firstName, lastName };
        const authorValidator = new authorValidator_1.default();
        const authorService = new authors_service_1.default(authorValidator);
        const createdAuthorDoc = await authorService.createAuthor(authorProps);
        res.status(201).json({
            message: "author created",
            author: createdAuthorDoc,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.postAuthor = postAuthor;
const getAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const authorValidator = new authorValidator_1.default();
        const authorService = new authors_service_1.default(authorValidator);
        const authorDoc = await authorService.getAuthor(authorId);
        if (!authorDoc)
            return next();
        res.status(200).json({ message: "author fetched", author: authorDoc });
    }
    catch (err) {
        next(err);
    }
};
exports.getAuthor = getAuthor;
const putAuthor = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body;
        const authorId = req.params.id;
        const authorProps = { firstName, lastName };
        const authorValidator = new authorValidator_1.default();
        const authorService = new authors_service_1.default(authorValidator);
        await authorService.updateAuthor(authorId, authorProps);
        res.status(200).json({
            message: "authoer updated",
        });
    }
    catch (err) {
        next(err);
    }
};
exports.putAuthor = putAuthor;
const deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const authorValidator = new authorValidator_1.default();
        const authorService = new authors_service_1.default(authorValidator);
        const result = await authorService.deleteAuthor(authorId);
        if (result === 0)
            return next();
        res.status(200).json({ message: "author deleted" });
    }
    catch (err) {
        next(err);
    }
};
exports.deleteAuthor = deleteAuthor;
