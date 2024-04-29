"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applicationError_1 = __importDefault(require("./applicationError"));
const dataBaseError_1 = require("./dataBaseError");
function throwError(err) {
    if (err instanceof applicationError_1.default)
        throw err;
    else if (err instanceof Error)
        throw new dataBaseError_1.DatabaseError(err.message || "something in the database went wrong");
    else
        console.log(err);
}
exports.default = throwError;
