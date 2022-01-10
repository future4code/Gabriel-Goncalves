import { User } from "../model/user";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {

    createUser = async (user: User):Promise<void> => {
        try{
            await this.connection("labook_users").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}