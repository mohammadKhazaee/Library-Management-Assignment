import { fromZodError } from "zod-validation-error";
import {
	createValidator,
	updateValidator,
} from "../../interfaces/validator.interface";
import { idSchema } from "../../types/general.type";

export default abstract class BaseValidator<C, U>
	implements createValidator<C>, updateValidator<U>
{
	constructor() {}

	async validateId(id: string): Promise<void | never> {
		const result = idSchema.safeParse(+id);
		if (!result.success) {
			const err = new Error(fromZodError(result.error).message);
			throw err;
		}
	}

	abstract validateCreate(createProps: C): void | never;
	abstract validateUpdate(updateProps: U): void | never;
}
