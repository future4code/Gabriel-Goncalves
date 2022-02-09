import { Request, Response } from "express";
import { ProductsBuisiness } from "../Buisiness/productsBuisiness"

export class ProductsController {

    getProductByQuery = async (
        req: Request,
        res: Response
    ) => {

        try {

            const input = (req.query.id ?? req.query.name ?? req.query.tag) as string

            const product = await new ProductsBuisiness().getProductByQuery(input)

            res.status(200).send(product)
        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }

    createProduct = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        try {

            const { name, tags } = req.body
            
            await new ProductsBuisiness().createProduct(name, tags)

            res.status(200).send("Produto criado")
        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }
}