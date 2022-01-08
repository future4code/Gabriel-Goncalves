import app from "./controller/app";
import { PostController } from "./controller/postController";

app.get("/posts/:id", new PostController().getPostById)