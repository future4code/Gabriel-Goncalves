import { InvestorsDatabase } from "../data/investorsDatabase"
import { Investor } from "../model/investor"
import { IdGenerator } from "../services/idGenerator"

export class InvestorBuisiness {

    getAllInvestors = async () => {

        const investors = await new InvestorsDatabase().getAllInvestors()

        if (investors.length === 0) {
            throw new Error("Não há investidores cadastrados")
        }

        return investors
    }

    createInvestor = async (
        fName: string,
        lName: string,
        participation: number
    ) => {

        if (!fName || !lName || !participation) {
            throw new Error("Preencha todos os campos")
        }
        
        const id = new IdGenerator().generate()

        const newInvestor = new Investor(id, fName, lName, participation)

        const result = await new InvestorsDatabase().createInvestor(newInvestor)
        
        return result
    }
}