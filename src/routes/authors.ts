import { Router } from "express";
import {
	AuthorController,
	DeleteAuthorStrategy,
	GetAuthorStrategy,
	GetAuthorsStrategy,
	PostAuthorStrategy,
	PutAuthorStrategy,
} from "../controllers/authors";

const router = Router();

const authorController = new AuthorController();

// GET /authors
router.get(
	"/",
	authorController
		.setStrategy(new GetAuthorsStrategy())
		.authorControllerFactory()
);

// POST /authors
router.post(
	"/",
	authorController
		.setStrategy(new PostAuthorStrategy())
		.authorControllerFactory()
);

// GET /authors/:id
router.get(
	"/:id",
	authorController
		.setStrategy(new GetAuthorStrategy())
		.authorControllerFactory()
);

// PUT /authors/:id
router.put(
	"/:id",
	authorController
		.setStrategy(new PutAuthorStrategy())
		.authorControllerFactory()
);

// DELETE /authors/:id
router.delete(
	"/:id",
	authorController
		.setStrategy(new DeleteAuthorStrategy())
		.authorControllerFactory()
);

export default router;
