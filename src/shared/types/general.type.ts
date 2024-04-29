import { z } from "zod";

export const idSchema = z
	.number({ message: "id must be positive number" })
	.gte(1, "id must be positive number");
