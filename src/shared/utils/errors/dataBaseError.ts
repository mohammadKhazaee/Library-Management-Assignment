import ApplicationError from "./applicationError";

export class DatabaseError extends ApplicationError {
	constructor(message: string) {
		super(message, 500);
	}
}
