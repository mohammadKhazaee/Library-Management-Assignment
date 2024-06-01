import { NextFunction, Request, RequestHandler, Response } from "express";

import AuthorService from "../services/authors.service";
import { IAuthorCreation } from "../shared/interfaces/author.interface";
import { authorUpdateProps } from "../shared/types/author.type";
import AuthorValidator from "../shared/utils/validators/authorValidator";

interface ControllerStrategy {
	handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void>;
}

export class GetAuthorsStrategy implements ControllerStrategy {
	async handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const authors = await service.getAuthors();
		res.status(200).json({ message: "success", authors });
	}
}

export class GetAuthorStrategy implements ControllerStrategy {
	async handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const authorId = req.params.id;
		const authorDoc = await service.getAuthor(authorId);

		if (!authorDoc) return next();
		res.status(200).json({
			message: "author fetched",
			author: authorDoc,
		});
	}
}

export class PostAuthorStrategy implements ControllerStrategy {
	async handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { firstName, lastName } = req.body as IAuthorCreation;
		const authorProps: IAuthorCreation = {
			firstName,
			lastName,
		};

		const createdAuthorDoc = await service.createAuthor(authorProps);
		res.status(201).json({
			message: "author created",
			author: createdAuthorDoc,
		});
	}
}

export class PutAuthorStrategy implements ControllerStrategy {
	async handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { firstName, lastName } = req.body as authorUpdateProps;
		const authorId = req.params.id;
		const authorProps: authorUpdateProps = { firstName, lastName };

		await service.updateAuthor(authorId, authorProps);

		res.status(200).json({
			message: "author updated",
		});
	}
}

export class DeleteAuthorStrategy implements ControllerStrategy {
	async handleRequest(
		service: AuthorService,
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const authorId = req.params.id;
		const result = await service.deleteAuthor(authorId);

		if (result === 0) return next();
		res.status(200).json({ message: "author deleted" });
	}
}

export class AuthorController {
	constructor(
		private strategy: ControllerStrategy = new GetAuthorsStrategy()
	) {}

	public authorControllerFactory(): RequestHandler {
		return async (req, res, next) => {
			try {
				const authorValidator = new AuthorValidator();
				const authorService = new AuthorService(authorValidator);

				this.strategy.handleRequest(authorService, req, res, next);
			} catch (err) {
				next(err);
			}
		};
	}

	public setStrategy(strategy: ControllerStrategy) {
		this.strategy = strategy;
		return this;
	}
}
