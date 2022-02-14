import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { pizzasRouter } from "./routes/pizzasRouter"
import {ordersRouter} from "./routes/ordersRouter"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", pizzasRouter)
app.use("/api", ordersRouter)

app.listen(process.env.PORT || 3003, () => {
    console.log("Ready")
})