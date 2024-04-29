import { RequestHandler } from "express";

import AuthorService from "../services/authors.service";
import { IAuthorCreation } from "../shared/interfaces/author.interface";
import { authorUpdateProps } from "../shared/types/author.type";
import AuthorValidator from "../shared/utils/validators/authorValidator";

export const getAuthors: RequestHandler = async (req, res, next) => {
	try {
		const authorValidator = new AuthorValidator();
		const authorService = new AuthorService(authorValidator);

		const authors = await authorService.getAuthors();

		res.status(200).json({ message: "success", authors });
	} catch (err) {
		next(err);
	}
};

export const postAuthor: RequestHandler = async (req, res, next) => {
	try {
		const { firstName, lastName } = req.body as IAuthorCreation;
		const authorProps: IAuthorCreation = { firstName, lastName };

		const authorValidator = new AuthorValidator();
		const authorService = new AuthorService(authorValidator);

		const createdAuthorDoc = await authorService.createAuthor(authorProps);

		res.status(201).json({
			message: "author created",
			author: createdAuthorDoc,
		});
	} catch (err) {
		next(err);
	}
};

export const getAuthor: RequestHandler = async (req, res, next) => {
	try {
		const authorId = req.params.id;

		const authorValidator = new AuthorValidator();
		const authorService = new AuthorService(authorValidator);

		const authorDoc = await authorService.getAuthor(authorId);

		if (!authorDoc) return next();
		res.status(200).json({ message: "author fetched", author: authorDoc });
	} catch (err) {
		next(err);
	}
};

export const putAuthor: RequestHandler = async (req, res, next) => {
	try {
		const { firstName, lastName } = req.body as authorUpdateProps;
		const authorId = req.params.id;
		const authorProps: authorUpdateProps = { firstName, lastName };

		const authorValidator = new AuthorValidator();
		const authorService = new AuthorService(authorValidator);

		await authorService.updateAuthor(authorId, authorProps);

		res.status(200).json({
			message: "author updated",
		});
	} catch (err) {
		next(err);
	}
};

export const deleteAuthor: RequestHandler = async (req, res, next) => {
	try {
		const authorId = req.params.id;

		const authorValidator = new AuthorValidator();
		const authorService = new AuthorService(authorValidator);

		const result = await authorService.deleteAuthor(authorId);

		if (result === 0) return next();
		res.status(200).json({ message: "author deleted" });
	} catch (err) {
		next(err);
	}
};
