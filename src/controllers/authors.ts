import { NextFunction, Request, RequestHandler, Response } from "express";

import AuthorService from "../services/authors.service";
import { IAuthorCreation } from "../shared/interfaces/author.interface";
import {
	authorControllers,
	authorUpdateProps,
} from "../shared/types/author.type";
import AuthorValidator from "../shared/utils/validators/authorValidator";

export const authorControllerFactory = (
	route: authorControllers
): RequestHandler => {
	return async (req, res, next) => {
		try {
			const authorValidator = new AuthorValidator();
			const authorService = new AuthorService(authorValidator);

			if (route === "getAuthors") {
				const authors = await authorService.getAuthors();
				return res.status(200).json({ message: "success", authors });
			}

			if (route === "postAuthor") {
				const { firstName, lastName } = req.body as IAuthorCreation;
				const authorProps: IAuthorCreation = {
					firstName,
					lastName,
				};

				const createdAuthorDoc = await authorService.createAuthor(
					authorProps
				);
				return res.status(201).json({
					message: "author created",
					author: createdAuthorDoc,
				});
			}

			if (route === "getAuthor") {
				const authorId = req.params.id;
				const authorDoc = await authorService.getAuthor(authorId);

				if (!authorDoc) return next();
				return res.status(200).json({
					message: "author fetched",
					author: authorDoc,
				});
			}

			if (route === "putAuthor") {
				const { firstName, lastName } = req.body as authorUpdateProps;
				const authorId = req.params.id;
				const authorProps: authorUpdateProps = {
					firstName,
					lastName,
				};
				await authorService.updateAuthor(authorId, authorProps);
				return res.status(200).json({
					message: "author updated",
				});
			}

			if (route === "deleteAuthor") {
				const authorId = req.params.id;

				const result = await authorService.deleteAuthor(authorId);

				if (result === 0) return next();
				return res.status(200).json({ message: "author deleted" });
			}
		} catch (err) {
			next(err);
		}
	};
};

// export const getAuthors: RequestHandler = async (req, res, next) => {
// 	try {
// 		const authorValidator = new AuthorValidator();
// 		const authorService = new AuthorService(authorValidator);

// 		const authors = await authorService.getAuthors();

// 		res.status(200).json({ message: "success", authors });
// 	} catch (err) {
// 		next(err);
// 	}
// };

// export const postAuthor: RequestHandler = async (req, res, next) => {
// 	try {
// 		const authorValidator = new AuthorValidator();
// 		const authorService = new AuthorService(authorValidator);

// 		const { firstName, lastName } = req.body as IAuthorCreation;
// 		const authorProps: IAuthorCreation = { firstName, lastName };

// 		const createdAuthorDoc = await authorService.createAuthor(authorProps);

// 		res.status(201).json({
// 			message: "author created",
// 			author: createdAuthorDoc,
// 		});
// 	} catch (err) {
// 		next(err);
// 	}
// };

// export const getAuthor: RequestHandler = async (req, res, next) => {
// 	try {
// 		const authorValidator = new AuthorValidator();
// 		const authorService = new AuthorService(authorValidator);

// 		const authorId = req.params.id;

// 		const authorDoc = await authorService.getAuthor(authorId);

// 		if (!authorDoc) return next();
// 		res.status(200).json({ message: "author fetched", author: authorDoc });
// 	} catch (err) {
// 		next(err);
// 	}
// };

// export const putAuthor: RequestHandler = async (req, res, next) => {
// 	try {
// 		const authorValidator = new AuthorValidator();
// 		const authorService = new AuthorService(authorValidator);

// 		const { firstName, lastName } = req.body as authorUpdateProps;
// 		const authorId = req.params.id;
// 		const authorProps: authorUpdateProps = { firstName, lastName };

// 		await authorService.updateAuthor(authorId, authorProps);

// 		res.status(200).json({
// 			message: "author updated",
// 		});
// 	} catch (err) {
// 		next(err);
// 	}
// };

// export const deleteAuthor: RequestHandler = async (req, res, next) => {
// 	try {
// 		const authorValidator = new AuthorValidator();
// 		const authorService = new AuthorService(authorValidator);

// 		const authorId = req.params.id;

// 		const result = await authorService.deleteAuthor(authorId);

// 		if (result === 0) return next();
// 		res.status(200).json({ message: "author deleted" });
// 	} catch (err) {
// 		next(err);
// 	}
// };
