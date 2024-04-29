"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorValidator = void 0;
const author_type_1 = require("../types/author.type");
class BaseValidator {
}
class AuthorValidator extends BaseValidator {
    constructor() {
        super();
    }
    static getInstance() {
        if (!AuthorValidator.instance) {
            AuthorValidator.instance = new AuthorValidator();
        }
        return AuthorValidator.instance;
    }
    validateCreate(authorProps) {
        const result = author_type_1.authorCreateSchema.parse(authorProps);
        console.log(result);
    }
    validateUpdate(updateProps) {
        throw new Error("Method not implemented.");
    }
}
exports.authorValidator = AuthorValidator.getInstance();
