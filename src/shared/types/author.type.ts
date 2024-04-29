import { z } from "zod";
import { toZod } from "tozod";

import { IAuthorCreation } from "../interfaces/author.interface";

export const authorCreateSchema: toZod<IAuthorCreation> = z.object({
	firstName: z.string().min(2).max(15),
	lastName: z.string().min(2).max(15),
});

export const authorUpdateSchema = z.object({
	firstName: z.string().min(2).max(15).optional(),
	lastName: z.string().min(2).max(15).optional(),
});

export type authorUpdateProps = z.infer<typeof authorUpdateSchema>;

export type findFilters = authorUpdateProps & {
	authorId?: string;
};
