import { Request, Response } from 'express'
import connection from '../connection'
import { Product, Purchase, User } from '../Types'

const createPurchases = async (
    req: Request,
    res: Response
) => {
    try {
        const { product_id, user_id, quantity } = req.body

        const [user]: User[] = await connection("labecommerce_users")
        .select()
        .where({id: product_id})

        if(!user) {
            throw new Error("Não encontrado")
        }

        const [product]: Product[] = await connection('labecommerce_products')
            .select()
            .where({ id: product_id })

            if(!product) {
                throw new Error("Não encontrado")
            }

            const total_price = product.price * quantity

            const purchase: Purchase = {
                id: Date.now().toString(),
                product_id,
                user_id,
                quantity,
                total_price
            }

            await connection("labecommerce_purchases").insert(purchase)

            res.status(200).send({message: "Compra concluída"})

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createPurchases