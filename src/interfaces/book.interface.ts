export interface IBookCreation {
	title: string;
	authorId: number;
}

export default interface IBook extends IBookCreation {
	bookId: number;
	createdAt: Date;
	updatedAt: Date;
}
