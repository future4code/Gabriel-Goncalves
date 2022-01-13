import { UserDatabase } from "../data/userDatabase"
import { User } from "../model/user"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export class UserBuisiness {

    createUser = async (
        name: string,
        email: string,
        password: string
    ): Promise<string> => {

        const id = new IdGenerator().generate()

        const hashManager = new HashManager()
        const hashPassword = hashManager.createHash(password)

        const newUser = new User(id, name, email, hashPassword)
        await new UserDatabase().createUser(newUser)

        const token = new Authenticator().generateToken({ id })
        return token
    }
}