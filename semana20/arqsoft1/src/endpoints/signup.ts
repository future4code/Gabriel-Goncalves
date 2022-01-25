import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { User } from "../types/user";

export default async function postUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
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

        const newUser = new User(id, name, email, password, role)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id, role })

        res.status(200).send({ message: "Usuário criado", token })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}