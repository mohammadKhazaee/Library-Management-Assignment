import { Book } from "../models/book.model";

export interface IAuthorCreation {
	firstName: string;
	lastName: string;
}

export default interface IAuthor extends IAuthorCreation {
	authorId: number;
	books?: Book[];
	createdAt: Date;
	updatedAt: Date;
}
