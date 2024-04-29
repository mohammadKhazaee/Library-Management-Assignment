"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_validation_error_1 = require("zod-validation-error");
const author_type_1 = require("../../types/author.type");
const baseValidator_1 = __importDefault(require("./baseValidator"));
const author_model_1 = require("../../../models/author.model");
const userFacingError_1 = require("../errors/userFacingError");
class AuthorValidator extends baseValidator_1.default {
    constructor() {
        super();
    }
    async validateCreate(authorProps) {
        const result = author_type_1.authorCreateSchema.safeParse(authorProps);
        if (!result.success) {
            throw new userFacingError_1.ValidationError((0, zod_validation_error_1.fromZodError)(result.error).message);
        }
    }
    validateUpdate(updateProps) {
        const result = author_type_1.authorUpdateSchema.safeParse(updateProps);
        if (!result.success) {
            throw new userFacingError_1.ValidationError((0, zod_validation_error_1.fromZodError)(result.error).message);
        }
    }
    async validateId(id) {
        super.validateId(id);
        const exists = await author_model_1.Author.exists({ authorId: id });
        if (!exists) {
            throw new userFacingError_1.NotFoundError("authorId doesnt exists in the library");
        }
    }
}
exports.default = AuthorValidator;
