import { Request, Response } from "express"
import connection from "../connection";
import { Product, User } from "../Types";

const getProducts = async function (
    req: Request,
    res: Response
) {
    try {
        const product: Product[] = await connection("labecommerce_users")
        res.send(product)
    } catch (error: any) {
        res.status(400).send({ message: error.messge })
    }
}

export default getProducts