import { IBookCreation } from "../shared/interfaces/book.interface";
import { Book } from "../models/book.model";
import { bookUpdateProps } from "../shared/types/book.type";
import BaseValidator from "../shared/utils/validators/baseValidator";

//import module
export default class BookService {
	constructor(
		private validatorClass: BaseValidator<IBookCreation, bookUpdateProps>
	) {}

	getBooks = async () => {
		try {
			return Book.fetchAll();
		} catch (err) {
			throw err;
		}
	};

	createBook = async (bookProps: IBookCreation) => {
		try {
			await this.validatorClass.validateCreate(bookProps);

			return await Book.create(bookProps);
		} catch (err) {
			throw err;
		}
	};

	getBook = async (bookId: string) => {
		try {
			await this.validatorClass.validateId(bookId);

			return await Book.fetchOne({ bookId });
		} catch (err) {
			throw err;
		}
	};

	updateBook = async (bookId: string, bookProps: bookUpdateProps) => {
		try {
			this.validatorClass.validateUpdate(bookProps);
			await this.validatorClass.validateId(bookId);

			return await Book.updateBook(bookId, bookProps);
		} catch (err) {
			throw err;
		}
	};

	deleteBook = async (bookId: string) => {
		try {
			await this.validatorClass.validateId(bookId);

			return await Book.deleteBook(bookId);
		} catch (err) {
			throw err;
		}
	};
}
