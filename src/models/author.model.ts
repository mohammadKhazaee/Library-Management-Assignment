import {
	DataTypes,
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	NonAttribute,
} from "@sequelize/core";
import {
	Attribute,
	PrimaryKey,
	AutoIncrement,
	NotNull,
	HasMany,
} from "@sequelize/core/decorators-legacy";

import { Book } from "./book.model";
import { IAuthorCreation } from "../interfaces/author.interface";
import { authorUpdateProps, findFilters } from "../types/author.type";

export class Author
	extends Model<InferAttributes<Author>, InferCreationAttributes<Author>>
	implements IAuthorCreation
{
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare authorId: CreationOptional<number>;

	@Attribute(DataTypes.STRING)
	@NotNull
	declare firstName: string;

	@Attribute(DataTypes.STRING)
	@NotNull
	declare lastName: string;

	@HasMany(() => Book, "authorId")
	declare books?: NonAttribute<Book[]>;

	// model methods
	static fetchAll() {
		return this.findAll();
	}

	static fetchOne({ authorId, firstName, lastName }: findFilters) {
		const whereClause: findFilters = {};

		if (authorId) whereClause.authorId = authorId;
		if (firstName) whereClause.firstName = firstName;
		if (lastName) whereClause.lastName = lastName;

		return this.findOne({ where: whereClause });
	}

	static updateAuthor(
		authorId: string,
		{ firstName, lastName }: authorUpdateProps
	) {
		const updateFields: authorUpdateProps = {};

		if (firstName) updateFields.firstName = firstName;
		if (lastName) updateFields.lastName = lastName;

		return this.update(updateFields, {
			where: {
				authorId,
			},
		});
	}

	static deleteAuthor(authorId: string) {
		return this.destroy({
			where: {
				authorId,
			},
		});
	}
}
