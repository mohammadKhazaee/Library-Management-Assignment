"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_validation_error_1 = require("zod-validation-error");
const general_type_1 = require("../../types/general.type");
const userFacingError_1 = require("../errors/userFacingError");
class BaseValidator {
    constructor() { }
    async validateId(id) {
        const result = general_type_1.idSchema.safeParse(+id);
        if (!result.success) {
            const err = new userFacingError_1.ValidationError((0, zod_validation_error_1.fromZodError)(result.error).message);
            throw err;
        }
    }
    async validateCreate(createProps) { }
}
exports.default = BaseValidator;
