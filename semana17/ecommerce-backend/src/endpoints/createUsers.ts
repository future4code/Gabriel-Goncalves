import { Request, Response } from "express"
import connection from "../connection"
import { User } from "../Types"

const createUsers = async function (
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Check the parameters.")
        }

        const user: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        await connection("labecommerce_users").insert(user)

        res.status(200).send({ message: "Usuário criado." })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createUsers