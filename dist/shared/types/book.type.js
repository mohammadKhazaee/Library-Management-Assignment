"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookUpdateSchema = exports.bookCreateSchema = void 0;
const zod_1 = require("zod");
exports.bookCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(2).max(15),
    authorId: zod_1.z.number().gte(1),
});
exports.bookUpdateSchema = zod_1.z.object({
    title: zod_1.z.string().min(2).max(15).optional(),
    authorId: zod_1.z.number().gte(1).optional(),
});
