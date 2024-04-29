import { RequestHandler } from "express-serve-static-core";
import { IAuthorCreation } from "../interfaces/author.interface";
import { Author } from "../models/author.model";
import { authorUpdateProps } from "../types/author.type";

//import module
class postService {
	getAuthors = async () => {
		try {
			// validationd here
			return Author.fetchAll();
		} catch (err) {
			console.log(err);
		}
	};

	createAuthor = async (authorProps: IAuthorCreation) => {
		try {
			// zod validation

			return await Author.create(authorProps);
		} catch (err) {
			console.log(err);
		}
	};

	getAuthor = async (authorId: string) => {
		try {
			return await Author.fetchOne({ authorId });
		} catch (err) {
			console.log(err);
		}
	};

	updateAuthor = async (authorId: string, authorProps: authorUpdateProps) => {
		try {
			await Author.updateAuthor(authorId, authorProps);
		} catch (err) {
			console.log(err);
		}
	};

	deleteAuthor = async (authorId: string) => {
		try {
			await Author.deleteAuthor(authorId);
		} catch (err) {
			console.log(err);
		}
	};
}

//export the class
export default new postService();
