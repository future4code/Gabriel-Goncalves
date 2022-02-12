import { Request, Response } from "express";
import { InvestorBuisiness } from "../buisiness/investorBuisiness";

export class InvestorController {

    getAllInvestors = async (
        req: Request,
        res: Response
    ) => {

        try {

            const investors = await new InvestorBuisiness().getAllInvestors()

            res.status(200).send(investors)
        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }

    createInvestor = async (
        req: Request,
        res: Response
    ) => {

        try {

            const { fName, lName, participation } = req.body

            await new InvestorBuisiness().createInvestor(fName,lName, participation)

            res.status(200).send("Investidor criado")
        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }
}