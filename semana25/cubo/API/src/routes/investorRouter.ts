import express from "express"
import { InvestorController } from "../controller/investorController"

export const investorRouter = express.Router()

const investorController = new InvestorController()

investorRouter.get("/all", investorController.getAllInvestors)
investorRouter.post("/create", investorController.createInvestor)