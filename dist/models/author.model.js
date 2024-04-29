"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const book_model_1 = require("./book.model");
class Author extends core_1.Model {
    // model methods
    static fetchAll() {
        return this.findAll();
    }
    static fetchOne({ authorId, firstName, lastName }) {
        const whereClause = {};
        if (authorId)
            whereClause.authorId = authorId;
        if (firstName)
            whereClause.firstName = firstName;
        if (lastName)
            whereClause.lastName = lastName;
        return this.findOne({ where: whereClause, include: ["books"] });
    }
    static updateAuthor(authorId, { firstName, lastName }) {
        const updateFields = {};
        if (firstName)
            updateFields.firstName = firstName;
        if (lastName)
            updateFields.lastName = lastName;
        return this.update(updateFields, {
            where: {
                authorId,
            },
        });
    }
    static deleteAuthor(authorId) {
        return this.destroy({
            where: {
                authorId,
            },
        });
    }
    static async exists({ authorId, firstName, lastName, }) {
        const whereClause = {};
        if (authorId)
            whereClause.authorId = authorId;
        if (firstName)
            whereClause.firstName = firstName;
        if (lastName)
            whereClause.lastName = lastName;
        return (await this.count({ where: whereClause })) > 0;
    }
}
exports.Author = Author;
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    decorators_legacy_1.PrimaryKey,
    decorators_legacy_1.AutoIncrement
], Author.prototype, "authorId", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull
], Author.prototype, "firstName", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull
], Author.prototype, "lastName", void 0);
__decorate([
    (0, decorators_legacy_1.HasMany)(() => book_model_1.Book, {
        foreignKey: {
            name: "authorId",
            onDelete: "CASCADE",
        },
    })
], Author.prototype, "books", void 0);
