"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = exports.UnauthenticatedError = exports.ValidationError = exports.ConflictError = exports.NotFoundError = exports.BadRequestError = exports.UserFacingError = void 0;
const applicationError_1 = __importDefault(require("./applicationError"));
class UserFacingError extends applicationError_1.default {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
exports.UserFacingError = UserFacingError;
class BadRequestError extends UserFacingError {
    constructor(message) {
        super(message, 400);
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends UserFacingError {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends UserFacingError {
    constructor(message) {
        super(message, 409);
    }
}
exports.ConflictError = ConflictError;
class ValidationError extends UserFacingError {
    constructor(message) {
        super(message, 422);
    }
}
exports.ValidationError = ValidationError;
class UnauthenticatedError extends UserFacingError {
    constructor(message) {
        super(message, 401);
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
class ForbiddenError extends UserFacingError {
    constructor(message) {
        super(message, 403);
    }
}
exports.ForbiddenError = ForbiddenError;
