import app from "./app";
import postUser from "./endpoints/signup";

app.post("/signup", postUser)