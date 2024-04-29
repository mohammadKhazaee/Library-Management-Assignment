"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const mysql_1 = require("@sequelize/mysql");
const author_model_1 = require("../../models/author.model");
const book_model_1 = require("../../models/book.model");
const sequelize = new core_1.Sequelize({
    dialect: mysql_1.MySqlDialect,
    database: process.env.DB_NAME || "library_db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
    // logging: console.log,
    models: [author_model_1.Author, book_model_1.Book],
});
exports.default = sequelize;
