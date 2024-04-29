"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = require("../models/author.model");
//import module
class postService {
    constructor() {
        this.getAuthors = async () => {
            try {
                // validationd here
                return author_model_1.Author.fetchAll();
            }
            catch (err) {
                console.log(err);
            }
        };
        this.createAuthor = async (authorProps) => {
            try {
                // zod validation
                return await author_model_1.Author.create(authorProps);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.getAuthor = async (authorId) => {
            try {
                return await author_model_1.Author.fetchOne({ authorId });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.updateAuthor = async (authorId, authorProps) => {
            try {
                await author_model_1.Author.updateAuthor(authorId, authorProps);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.deleteAuthor = async (authorId) => {
            try {
                await author_model_1.Author.deleteAuthor(authorId);
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
//export the class
exports.default = new postService();
