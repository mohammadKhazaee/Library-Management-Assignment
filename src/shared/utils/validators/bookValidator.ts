import { ValidationError, fromZodError } from "zod-validation-error";

import { IBookCreation } from "../../interfaces/book.interface";
import {
	bookCreateSchema,
	bookUpdateProps,
	bookUpdateSchema,
} from "../../types/book.type";
import BaseValidator from "./baseValidator";
import { Book } from "../../../models/book.model";
import { Author } from "../../../models/author.model";
import { ConflictError, NotFoundError } from "../errors/userFacingError";

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
			throw new ValidationError(fromZodError(result.error).message);
		}

		const exists = await Author.exists({
			authorId: bookProps.authorId.toString(),
		});
		if (!exists) {
			throw new ConflictError("authorId doesnt exists in the library");
		}
	}

	validateUpdate(updateProps: bookUpdateProps) {
		const result = bookUpdateSchema.safeParse(updateProps);
		if (!result.success) {
			throw new ValidationError(fromZodError(result.error).message);
		}
	}

	async validateId(id: string) {
		await super.validateId(id);
		const exists = await Book.exists({ bookId: id });
		if (!exists) {
			throw new NotFoundError("bookId doesnt exists in the library");
		}
	}
}
