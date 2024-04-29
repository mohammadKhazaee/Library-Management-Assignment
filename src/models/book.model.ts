import {
	DataTypes,
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
} from "@sequelize/core";
import {
	Attribute,
	PrimaryKey,
	AutoIncrement,
	NotNull,
} from "@sequelize/core/decorators-legacy";
import { IBookCreation } from "../shared/interfaces/book.interface";
import { bookUpdateProps, findBookFilters } from "../shared/types/book.type";

export class Book
	extends Model<InferAttributes<Book>, InferCreationAttributes<Book>>
	implements IBookCreation
{
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare bookId: CreationOptional<number>;

	@Attribute(DataTypes.STRING)
	@NotNull
	declare title: string;

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare authorId: number;

	// model methods
	static fetchAll() {
		return this.findAll();
	}

	static fetchOne({ title, authorId }: findBookFilters) {
		const whereClause: findBookFilters = {};

		if (authorId) whereClause.authorId = authorId;
		if (title) whereClause.title = title;
		if (authorId) whereClause.authorId = authorId;

		return this.findOne({ where: whereClause });
	}

	static updateBook(bookId: string, { title, authorId }: bookUpdateProps) {
		const updateFields: bookUpdateProps = {};

		if (title) updateFields.title = title;
		if (authorId) updateFields.authorId = authorId;

		return this.update(updateFields, {
			where: {
				bookId,
			},
		});
	}

	static deleteBook(authorId: string) {
		return this.destroy({
			where: {
				authorId,
			},
		});
	}

	static async exists({
		bookId,
		title,
		authorId,
	}: findBookFilters): Promise<boolean> {
		const whereClause: findBookFilters = {};

		if (bookId) whereClause.bookId = bookId;
		if (title) whereClause.title = title;
		if (authorId) whereClause.authorId = authorId;

		return (await this.count({ where: whereClause })) > 0;
	}
}
