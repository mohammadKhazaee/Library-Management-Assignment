import { RequestHandler } from "express";
import authorService from "../services/authors.service";
import { IAuthorCreation } from "../interfaces/author.interface";
import { authorUpdateProps } from "../types/author.type";

export const getAuthors: RequestHandler = async (req, res, next) => {
	try {
		const authors = await authorService.getAuthors();

		res.status(200).json({ message: "success", authors });
	} catch (err) {
		console.log(err);
		// if (!err.statusCode) err.statusCode = 500;
		next(err);
	}
};

export const postAuthor: RequestHandler = async (req, res, next) => {
	try {
		const { firstName, lastName } = req.body as IAuthorCreation;
		const authorProps: IAuthorCreation = { firstName, lastName };

		// zod validation

		const createdAuthorDoc = await authorService.createAuthor(authorProps);

		res.status(201).json({
			message: "author created",
			author: createdAuthorDoc,
		});
	} catch (err) {
		console.log(err);
		// if (!err.statusCode) err.statusCode = 500;
		next(err);
	}
};

export const getAuthor: RequestHandler = async (req, res, next) => {
	try {
		const authorId = req.params.id;

		const authorDoc = await authorService.getAuthor(authorId);

		res.status(200).json({ message: "author fetched", author: authorDoc });
	} catch (err) {
		console.log(err);
		// if (!err.statusCode) err.statusCode = 500;
		next(err);
	}
};

export const putAuthor: RequestHandler = async (req, res, next) => {
	try {
		const { firstName, lastName } = req.body as authorUpdateProps;
		const authorId = req.params.id;

		const authorProps: authorUpdateProps = { firstName, lastName };

		await authorService.updateAuthor(authorId, authorProps);

		res.status(200).json({
			message: "authoer updated",
		});
	} catch (err) {
		console.log(err);
		// if (!err.statusCode) err.statusCode = 500;
		next(err);
	}
};

export const deleteAuthor: RequestHandler = async (req, res, next) => {
	try {
		const authorId = req.params.id;

		await authorService.deleteAuthor(authorId);

		res.status(200).json({ message: "author deleted" });
	} catch (err) {
		console.log(err);
		// if (!err.statusCode) err.statusCode = 500;
		next(err);
	}
};
