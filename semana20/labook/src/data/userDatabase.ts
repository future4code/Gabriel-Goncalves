import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {

    getUserId = async (
        token: string
    ): Promise<String | undefined> => {

        const result = await this.connection("labook_users").where()

        return undefined
    }
}