"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../models/author.model");
const throwError_1 = __importDefault(require("../shared/utils/errors/throwError"));
//import module
class AuthorService {
    constructor(validatorClass) {
        this.validatorClass = validatorClass;
        this.getAuthors = async () => {
            try {
                return await author_model_1.Author.fetchAll();
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.createAuthor = async (authorProps) => {
            try {
                await this.validatorClass.validateCreate(authorProps);
                return await author_model_1.Author.create(authorProps);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.getAuthor = async (authorId) => {
            try {
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.fetchOne({ authorId });
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.updateAuthor = async (authorId, authorProps) => {
            try {
                this.validatorClass.validateUpdate(authorProps);
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.updateAuthor(authorId, authorProps);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
        this.deleteAuthor = async (authorId) => {
            try {
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.deleteAuthor(authorId);
            }
            catch (err) {
                (0, throwError_1.default)(err);
            }
        };
    }
}
exports.default = AuthorService;
