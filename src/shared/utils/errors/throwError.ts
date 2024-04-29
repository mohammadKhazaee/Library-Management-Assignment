import ApplicationError from "./applicationError";
import { DatabaseError } from "./dataBaseError";

export default function throwError(err: unknown) {
	if (err instanceof ApplicationError) throw err;
	else if (err instanceof Error)
		throw new DatabaseError(
			err.message || "something in the database went wrong"
		);
	else console.log(err);
}
