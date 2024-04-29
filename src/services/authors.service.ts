import { IAuthorCreation } from "../shared/interfaces/author.interface";
import { Author } from "../models/author.model";
import { authorUpdateProps } from "../shared/types/author.type";
import BaseValidator from "../shared/utils/validators/baseValidator";

//import module
export default class AuthorService {
	constructor(
		private validatorClass: BaseValidator<
			IAuthorCreation,
			authorUpdateProps
		>
	) {}

	getAuthors = async () => {
		try {
			return Author.fetchAll();
		} catch (err) {
			throw err;
		}
	};

	createAuthor = async (authorProps: IAuthorCreation) => {
		try {
			await this.validatorClass.validateCreate(authorProps);

			return await Author.create(authorProps);
		} catch (err) {
			throw err;
		}
	};

	getAuthor = async (authorId: string) => {
		try {
			await this.validatorClass.validateId(authorId);

			return await Author.fetchOne({ authorId });
		} catch (err) {
			throw err;
		}
	};

	updateAuthor = async (authorId: string, authorProps: authorUpdateProps) => {
		try {
			this.validatorClass.validateUpdate(authorProps);
			await this.validatorClass.validateId(authorId);

			return await Author.updateAuthor(authorId, authorProps);
		} catch (err) {
			throw err;
		}
	};

	deleteAuthor = async (authorId: string) => {
		try {
			await this.validatorClass.validateId(authorId);

			return await Author.deleteAuthor(authorId);
		} catch (err) {
			throw err;
		}
	};
}
