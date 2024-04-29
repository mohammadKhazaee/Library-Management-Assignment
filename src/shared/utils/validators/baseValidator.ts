import { fromZodError } from "zod-validation-error";
import {
	createValidator,
	updateValidator,
} from "../../interfaces/validator.interface";
import { idSchema } from "../../types/general.type";
import { ValidationError } from "../errors/userFacingError";

export default abstract class BaseValidator<C, U>
	implements createValidator<C>, updateValidator<U>
{
	constructor() {}

	async validateId(id: string): Promise<void | never> {
		const result = idSchema.safeParse(+id);
		if (!result.success) {
			throw new ValidationError(fromZodError(result.error).message);
		}
	}

	async validateCreate(createProps: C): Promise<void | never> {}
	abstract validateUpdate(updateProps: U): void | never;
}
