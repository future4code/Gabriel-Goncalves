import { User } from "../types/user";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection("cookenu_user")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("cookenu_user")
                .select("*")
                .where({ email: email })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}