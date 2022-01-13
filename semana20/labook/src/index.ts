import app from "./controller/app";
import { PostController } from "./controller/postController";
import { UserController } from "./controller/userController";

app.get("/posts/:id", new PostController().getPostById)
app.post("/post/:userId", new PostController().createPost)
app.post("/signup", new UserController().signup)