import { Request, Response } from "express"
import { UserBuisiness } from "../business/userBusiness"

export class UserController {

    signup = async (
        req: Request,
        res: Response) => {
        try {

            const { name, email, password } = req.body

            const result = await new UserBuisiness().createUser(name, email, password)

            res.status(200).send({ message: "Usuário criado", result })

        } catch (error: any) {
            res.status(500).send("Falha interna")
        }
    }
}

