"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_validation_error_1 = require("zod-validation-error");
const book_type_1 = require("../../types/book.type");
const baseValidator_1 = __importDefault(require("./baseValidator"));
const book_model_1 = require("../../../models/book.model");
const author_model_1 = require("../../../models/author.model");
class BookValidator extends baseValidator_1.default {
    constructor() {
        super();
    }
    async validateCreate(bookProps) {
        const result = book_type_1.bookCreateSchema.safeParse(bookProps);
        if (!result.success) {
            const err = new Error((0, zod_validation_error_1.fromZodError)(result.error).message);
            throw err;
        }
        const exists = await author_model_1.Author.exists({
            authorId: bookProps.authorId.toString(),
        });
        if (!exists) {
            const err = new Error("authorId doesnt exists in the library");
            throw err;
        }
    }
    validateUpdate(updateProps) {
        const result = book_type_1.bookUpdateSchema.safeParse(updateProps);
        if (!result.success) {
            const err = new Error((0, zod_validation_error_1.fromZodError)(result.error).message);
            throw err;
        }
    }
    async validateId(id) {
        super.validateId(id);
        const exists = await book_model_1.Book.exists({ bookId: id });
        if (!exists) {
            const err = new Error("bookId doesnt exists in the library");
            throw err;
        }
    }
}
exports.default = BookValidator;
