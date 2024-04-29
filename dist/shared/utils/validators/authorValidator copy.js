"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_validation_error_1 = require("zod-validation-error");
const author_type_1 = require("../../types/author.type");
const baseValidator_1 = __importDefault(require("./baseValidator"));
const author_model_1 = require("../../../models/author.model");
class AuthorValidator extends baseValidator_1.default {
    constructor() {
        super();
    }
    validateCreate(authorProps) {
        const result = author_type_1.authorCreateSchema.safeParse(authorProps);
        if (!result.success) {
            const err = new Error((0, zod_validation_error_1.fromZodError)(result.error).message);
            throw err;
        }
    }
    validateUpdate(updateProps) {
        const result = author_type_1.authorUpdateSchema.safeParse(updateProps);
        if (!result.success) {
            const err = new Error((0, zod_validation_error_1.fromZodError)(result.error).message);
            throw err;
        }
    }
    async validateId(id) {
        super.validateId(id);
        const exists = await author_model_1.Author.exists({ authorId: id });
        if (!exists) {
            const err = new Error("id doesnt exists in the library");
            throw err;
        }
    }
}
exports.default = AuthorValidator;
