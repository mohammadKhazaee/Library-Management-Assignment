import { fromZodError } from "zod-validation-error";

import { IAuthorCreation } from "../../interfaces/author.interface";
import {
	authorCreateSchema,
	authorUpdateProps,
	authorUpdateSchema,
} from "../../types/author.type";
import BaseValidator from "./baseValidator";
import { Author } from "../../../models/author.model";
import { NotFoundError, ValidationError } from "../errors/userFacingError";

export default class AuthorValidator extends BaseValidator<
	IAuthorCreation,
	authorUpdateProps
> {
	constructor() {
		super();
	}

	async validateCreate(authorProps: IAuthorCreation) {
		const result = authorCreateSchema.safeParse(authorProps);
		if (!result.success) {
			throw new ValidationError(fromZodError(result.error).message);
		}
	}

	validateUpdate(updateProps: authorUpdateProps) {
		const result = authorUpdateSchema.safeParse(updateProps);
		if (!result.success) {
			throw new ValidationError(fromZodError(result.error).message);
		}
	}

	async validateId(id: string) {
		super.validateId(id);
		const exists = await Author.exists({ authorId: id });
		if (!exists) {
			throw new NotFoundError("authorId doesnt exists in the library");
		}
	}
}
