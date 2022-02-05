import { Investor } from "../model/investor"
import { BaseDatabase } from "./baseDatabase"

export class InvestorsDatabase extends BaseDatabase {

    getAllInvestors = async () => {

        const result = await this.connection("investors")
            .select("*")

        return result
    }

    createInvestor = async (
        investor: Investor
    ) => {

        const result = await this.connection("investors")
            .insert(investor)
            
        return result
    }
}