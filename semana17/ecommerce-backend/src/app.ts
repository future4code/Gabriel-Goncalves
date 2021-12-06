import express, { Express } from "express"
import cors from "cors"
import createUsers from "./endpoints/createUsers"
import getUsers from "./endpoints/getUsers"
import createProduct from "./endpoints/createProduct"
import getProducts from "./endpoints/getProducts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users", createUsers)
app.get("/users", getUsers)

app.post("/products", createProduct)
app.get("/products", getProducts)

app.listen(3003, () => {
    console.log("Servidor pronto!")
})

export default app