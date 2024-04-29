"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorUpdateSchema = exports.authorCreateSchema = void 0;
const zod_1 = require("zod");
exports.authorCreateSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2).max(15),
    lastName: zod_1.z.string().min(2).max(15),
});
exports.authorUpdateSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2).max(15).optional(),
    lastName: zod_1.z.string().min(2).max(15).optional(),
});
