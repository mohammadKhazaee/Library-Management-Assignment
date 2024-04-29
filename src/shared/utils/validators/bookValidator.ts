import { fromZodError } from "zod-validation-error";

import { IBookCreation } from "../../interfaces/book.interface";
import {
	bookCreateSchema,
	bookUpdateProps,
	bookUpdateSchema,
} from "../../types/book.type";
import BaseValidator from "./baseValidator";
import { Book } from "../../../models/book.model";
import { Author } from "../../../models/author.model";

export default class BookValidator extends BaseValidator<
	IBookCreation,
	bookUpdateProps
> {
	constructor() {
		super();
	}

	async validateCreate(bookProps: IBookCreation) {
		const result = bookCreateSchema.safeParse(bookProps);
		if (!result.success) {
			const err = new Error(fromZodError(result.error).message);
			throw err;
		}
		const exists = await Author.exists({
			authorId: bookProps.authorId.toString(),
		});
		if (!exists) {
			const err = new Error("authorId doesnt exists in the library");
			throw err;
		}
	}

	validateUpdate(updateProps: bookUpdateProps) {
		const result = bookUpdateSchema.safeParse(updateProps);
		if (!result.success) {
			const err = new Error(fromZodError(result.error).message);
			throw err;
		}
	}

	async validateId(id: string) {
		super.validateId(id);
		const exists = await Book.exists({ bookId: id });
		if (!exists) {
			const err = new Error("bookId doesnt exists in the library");
			throw err;
		}
	}
}
