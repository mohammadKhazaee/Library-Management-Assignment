import ApplicationError from "./applicationError";

export class UserFacingError extends ApplicationError {
	constructor(message: string, statusCode: number) {
		super(message, statusCode);
	}
}

export class BadRequestError extends UserFacingError {
	constructor(message: string) {
		super(message, 400);
	}
}

export class NotFoundError extends UserFacingError {
	constructor(message: string) {
		super(message, 404);
	}
}

export class ConflictError extends UserFacingError {
	constructor(message: string) {
		super(message, 409);
	}
}

export class ValidationError extends UserFacingError {
	constructor(message: string) {
		super(message, 422);
	}
}

export class UnauthenticatedError extends UserFacingError {
	constructor(message: string) {
		super(message, 401);
	}
}

export class ForbiddenError extends UserFacingError {
	constructor(message: string) {
		super(message, 403);
	}
}
