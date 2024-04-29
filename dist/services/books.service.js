"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = require("../models/book.model");
const throwError_1 = __importDefault(require("../shared/utils/errors/throwError"));
//import module
class BookService {
    constructor(validatorClass) {
        this.validatorClass = validatorClass;
        this.getBooks = async () => {
            try {
                return book_model_1.Book.fetchAll();
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.createBook = async (bookProps) => {
            try {
                await this.validatorClass.validateCreate(bookProps);
                return await book_model_1.Book.create(bookProps);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.getBook = async (bookId) => {
            try {
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.fetchOne({ bookId });
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.updateBook = async (bookId, bookProps) => {
            try {
                this.validatorClass.validateUpdate(bookProps);
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.updateBook(bookId, bookProps);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.deleteBook = async (bookId) => {
            try {
                await this.validatorClass.validateId(bookId);
                return await book_model_1.Book.deleteBook(bookId);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
    }
}
exports.default = BookService;
