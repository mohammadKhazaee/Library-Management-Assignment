"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../models/author.model");
//import module
class AuthorService {
    constructor(validatorClass) {
        this.validatorClass = validatorClass;
        this.getAuthors = async () => {
            try {
                return author_model_1.Author.fetchAll();
            }
            catch (err) {
                throw err;
            }
        };
        this.createAuthor = async (authorProps) => {
            try {
                await this.validatorClass.validateCreate(authorProps);
                return await author_model_1.Author.create(authorProps);
            }
            catch (err) {
                throw err;
            }
        };
        this.getAuthor = async (authorId) => {
            try {
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.fetchOne({ authorId });
            }
            catch (err) {
                throw err;
            }
        };
        this.updateAuthor = async (authorId, authorProps) => {
            try {
                this.validatorClass.validateUpdate(authorProps);
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.updateAuthor(authorId, authorProps);
            }
            catch (err) {
                throw err;
            }
        };
        this.deleteAuthor = async (authorId) => {
            try {
                await this.validatorClass.validateId(authorId);
                return await author_model_1.Author.deleteAuthor(authorId);
            }
            catch (err) {
                throw err;
            }
        };
    }
}
exports.default = AuthorService;
