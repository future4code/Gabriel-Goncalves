import { Request, Response } from "express"
import { UserDatabase } from "../data/userDatabase"
import { User } from "../entities/user"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422).send("Preencha todos os 3 campos para cadastro")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409).send("Email já cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, password)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id })

        res.status(200).send({ message: "Usuário criado", token })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}