import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import {productsRouter} from "./Routes/productsRouter"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/products", productsRouter)

app.listen(3003, () => {
    console.log("Ready")
})