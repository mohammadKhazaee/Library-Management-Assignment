import { RequestHandler } from "express";

import BookService from "../services/books.service";
import { IBookCreation } from "../shared/interfaces/book.interface";
import { bookUpdateProps } from "../shared/types/book.type";
import BookValidator from "../shared/utils/validators/bookValidator";

export const getBooks: RequestHandler = async (req, res, next) => {
	try {
		const bookValidator = new BookValidator();
		const bookService = new BookService(bookValidator);

		const books = await bookService.getBooks();

		res.status(200).json({ message: "success", books });
	} catch (err) {
		next(err);
	}
};

export const postBook: RequestHandler = async (req, res, next) => {
	try {
		const { title, authorId } = req.body as IBookCreation;
		const bookProps: IBookCreation = { title, authorId };

		const bookValidator = new BookValidator();
		const bookService = new BookService(bookValidator);

		const createdBookDoc = await bookService.createBook(bookProps);

		res.status(201).json({
			message: "book created",
			book: createdBookDoc,
		});
	} catch (err) {
		next(err);
	}
};

export const getBook: RequestHandler = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const bookValidator = new BookValidator();
		const bookService = new BookService(bookValidator);

		const bookDoc = await bookService.getBook(bookId);

		if (!bookDoc) return next();
		res.status(200).json({ message: "book fetched", book: bookDoc });
	} catch (err) {
		next(err);
	}
};

export const putBook: RequestHandler = async (req, res, next) => {
	try {
		const { title, authorId } = req.body as bookUpdateProps;
		const bookId = req.params.id;
		const bookProps: bookUpdateProps = { title, authorId };

		const bookValidator = new BookValidator();
		const bookService = new BookService(bookValidator);

		await bookService.updateBook(bookId, bookProps);

		res.status(200).json({
			message: "authoer updated",
		});
	} catch (err) {
		next(err);
	}
};

export const deleteBook: RequestHandler = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const bookValidator = new BookValidator();
		const bookService = new BookService(bookValidator);

		const result = await bookService.deleteBook(bookId);

		if (result === 0) return next();
		res.status(200).json({ message: "book deleted" });
	} catch (err) {
		next(err);
	}
};
