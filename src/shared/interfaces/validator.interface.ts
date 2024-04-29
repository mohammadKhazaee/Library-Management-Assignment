export interface createValidator<T> {
	validateCreate(createProps: T): void | never;
}

export interface updateValidator<T> {
	validateUpdate(updateProps: T): void | never;
}
