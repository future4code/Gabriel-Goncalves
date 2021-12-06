import { Request, Response } from "express"
import connection from "../connection";
import { User } from "../Types";

const getUsers = async function (
    req: Request,
    res: Response
) {
    try {
        const users:User[] = await connection("labecommerce_users")
        res.send(users)
    } catch (error: any) {
        res.status(400).send({ message: error.messge })
    }
}

export default getUsers