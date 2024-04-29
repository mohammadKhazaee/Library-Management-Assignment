import { z } from "zod";
import { toZod } from "tozod";

import { IBookCreation } from "../interfaces/book.interface";

export const bookCreateSchema: toZod<IBookCreation> = z.object({
	title: z.string().min(2).max(15),
	authorId: z.number().gte(1),
});

export const bookUpdateSchema = z.object({
	title: z.string().min(2).max(15).optional(),
	authorId: z.number().gte(1).optional(),
});

export type bookUpdateProps = z.infer<typeof bookUpdateSchema>;

export type findBookFilters = bookUpdateProps & {
	bookId?: string;
};
