"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthorData = void 0;
const author_type_1 = require("../types/author.type");
function validateAuthorData(authorProps) {
    const result = author_type_1.authorCreateSchema.parse(authorProps);
    console.log(result);
}
exports.validateAuthorData = validateAuthorData;
class BaseValidator {
}
