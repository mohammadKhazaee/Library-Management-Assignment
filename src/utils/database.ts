import { Sequelize, importModels } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import { Author } from "../models/author.model";
import { Book } from "../models/book.model";

const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: process.env.DB_NAME || "library_db",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
	// logging: console.log,
	models: [Author, Book],
});

export default sequelize;
