import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { investorRouter } from "./routes/investorRouter";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/investors", investorRouter)

app.listen(3003, () => {
    console.log("Ready")
})