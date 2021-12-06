import { Request, Response } from "express"
import connection from "../connection";
import { Product } from "../Types";

const createProduct = async function (
    req: Request,
    res: Response
) {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error("Check the parameters")
        }

        const product: Product = {
            id: Date.now.toString(),
            name,
            price,
            image_url
        }

        await connection("labecommerce_products").insert(product)
        res.send({ message: "Product created." })
    } catch (error: any) {
        res.status(400).send({ message: error.messge })
    }
}

export default createProduct