"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = require("../models/book.model");
//import module
class BookService {
    constructor(validatorClass) {
        this.validatorClass = validatorClass;
        this.getBooks = async () => {
            try {
                return book_model_1.Book.fetchAll();
            }
            catch (err) {
                throw err;
            }
        };
        this.createBook = async (bookProps) => {
            try {
                await this.validatorClass.validateCreate(bookProps);
                return await book_model_1.Book.create(bookProps);
            }
            catch (err) {
                throw err;
            }
        };
        this.getBook = async (bookId) => {
            try {
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.fetchOne({ bookId });
            }
            catch (err) {
                throw err;
            }
        };
        this.updateBook = async (bookId, bookProps) => {
            try {
                this.validatorClass.validateUpdate(bookProps);
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.updateBook(bookId, bookProps);
            }
            catch (err) {
                throw err;
            }
        };
        this.deleteBook = async (bookId) => {
            try {
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.deleteBook(bookId);
            }
            catch (err) {
                throw err;
            }
        };
    }
}
exports.default = BookService;
