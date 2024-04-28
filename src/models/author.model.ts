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
import IAuthor from "../interfaces/author.interface";

export class Author
	extends Model<InferAttributes<Author>, InferCreationAttributes<Author>>
	implements IAuthor
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

	declare createdAt: Date;

	declare updatedAt: Date;
}
