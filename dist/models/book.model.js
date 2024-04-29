"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class Book extends core_1.Model {
    // model methods
    static fetchAll() {
        return this.findAll();
    }
    static fetchOne({ title, authorId }) {
        const whereClause = {};
        if (authorId)
            whereClause.authorId = authorId;
        if (title)
            whereClause.title = title;
        if (authorId)
            whereClause.authorId = authorId;
        return this.findOne({ where: whereClause });
    }
    static updateBook(bookId, { title, authorId }) {
        const updateFields = {};
        if (title)
            updateFields.title = title;
        if (authorId)
            updateFields.authorId = authorId;
        return this.update(updateFields, {
            where: {
                bookId,
            },
        });
    }
    static deleteBook(authorId) {
        return this.destroy({
            where: {
                authorId,
            },
        });
    }
    static async exists({ bookId, title, authorId, }) {
        const whereClause = {};
        if (bookId)
            whereClause.bookId = bookId;
        if (title)
            whereClause.title = title;
        if (authorId)
            whereClause.authorId = authorId;
        return (await this.count({ where: whereClause })) > 0;
    }
}
exports.Book = Book;
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    decorators_legacy_1.PrimaryKey,
    decorators_legacy_1.AutoIncrement
], Book.prototype, "bookId", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull
], Book.prototype, "title", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    decorators_legacy_1.NotNull
], Book.prototype, "authorId", void 0);
