import app from "./app"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signUp"

app.post("/signup", signup)
app.post("/login", login)