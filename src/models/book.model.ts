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
import IBook from "../interfaces/book.interface";

export class Book
	extends Model<InferAttributes<Book>, InferCreationAttributes<Book>>
	implements IBook
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

	declare createdAt: Date;

	declare updatedAt: Date;
}
