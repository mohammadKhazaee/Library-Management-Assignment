import { fromZodError } from "zod-validation-error";

import { IAuthorCreation } from "../../interfaces/author.interface";
import {
	authorCreateSchema,
	authorUpdateProps,
	authorUpdateSchema,
} from "../../types/author.type";
import BaseValidator from "./baseValidator";
import { Author } from "../../../models/author.model";

export default class AuthorValidator extends BaseValidator<
	IAuthorCreation,
	authorUpdateProps
> {
	constructor() {
		super();
	}

	validateCreate(authorProps: IAuthorCreation) {
		const result = authorCreateSchema.safeParse(authorProps);
		if (!result.success) {
			const err = new Error(fromZodError(result.error).message);
			throw err;
		}
	}

	validateUpdate(updateProps: authorUpdateProps) {
		const result = authorUpdateSchema.safeParse(updateProps);
		if (!result.success) {
			const err = new Error(fromZodError(result.error).message);
			throw err;
		}
	}

	async validateId(id: string) {
		super.validateId(id);
		const exists = await Author.exists({ authorId: id });
		if (!exists) {
			const err = new Error("id doesnt exists in the library");
			throw err;
		}
	}
}
