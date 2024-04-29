"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.putBook = exports.getBook = exports.postBook = exports.getBooks = void 0;
const books_service_1 = __importDefault(require("../services/books.service"));
const bookValidator_1 = __importDefault(require("../shared/utils/validators/bookValidator"));
const getBooks = async (req, res, next) => {
    try {
        const bookValidator = new bookValidator_1.default();
        const bookService = new books_service_1.default(bookValidator);
        const books = await bookService.getBooks();
        res.status(200).json({ message: "success", books });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.getBooks = getBooks;
const postBook = async (req, res, next) => {
    try {
        const { title, authorId } = req.body;
        const bookProps = { title, authorId };
        const bookValidator = new bookValidator_1.default();
        const bookService = new books_service_1.default(bookValidator);
        const createdBookDoc = await bookService.createBook(bookProps);
        res.status(201).json({
            message: "book created",
            book: createdBookDoc,
        });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.postBook = postBook;
const getBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const bookValidator = new bookValidator_1.default();
        const bookService = new books_service_1.default(bookValidator);
        const bookDoc = await bookService.getBook(bookId);
        if (!bookDoc)
            return next();
        res.status(200).json({ message: "book fetched", book: bookDoc });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.getBook = getBook;
const putBook = async (req, res, next) => {
    try {
        const { title, authorId } = req.body;
        const bookId = req.params.id;
        const bookProps = { title, authorId };
        const bookValidator = new bookValidator_1.default();
        const bookService = new books_service_1.default(bookValidator);
        const result = await bookService.updateBook(bookId, bookProps);
        console.log(result);
        // if (!bookDoc) return next();
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
exports.putBook = putBook;
const deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const bookValidator = new bookValidator_1.default();
        const bookService = new books_service_1.default(bookValidator);
        const result = await bookService.deleteBook(bookId);
        if (result === 0)
            return next();
        res.status(200).json({ message: "book deleted" });
    }
    catch (err) {
        console.log(err);
        // if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
};
exports.deleteBook = deleteBook;
