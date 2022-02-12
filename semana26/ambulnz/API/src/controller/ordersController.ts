import { Request, Response } from "express"
import { OrdersBuisiness } from "../buisiness/ordersBuisiness"
import { Order } from "../model/order"

export class OrdersController {

    getOrders = async (
        req: Request,
        res: Response
    ) => {

        try {

            const orders = await new OrdersBuisiness().getOrders()

            res.status(200).send(orders)

        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }

    getOrderById = async (
        req: Request,
        res: Response
    ) => {

        try {

            const id = req.params.id

            const order = await new OrdersBuisiness().getOrderById(id)

            res.status(200).send(order)

        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }

    makeOrder = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        try {

            const { pizza, quantity } = req.body
            // console.log(pizza, quantity)

            await new OrdersBuisiness().makeOrder(pizza, quantity)

            res.status(200).send(`Your orer is confirmed.`)

        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }
}