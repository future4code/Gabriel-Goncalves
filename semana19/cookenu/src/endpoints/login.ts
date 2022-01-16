import { Request, Response } from "express"
import { UserDatabase } from "../data/userDatabase"
import { User } from "../entities/user"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send("Preencha todos os 3 campos para cadastro")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409).send("Email não cadastrado")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            res.status(401).send("Email e/ou senha inválidos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId() })

        res.status(200).send({ message: "Usuário logado", token })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}