import { OrdersDatabase } from "../data/ordersDatabase"
import { Order } from "../model/order"
import { IdGenerator } from "../services/idGenerator"

export class OrdersBuisiness {

    getOrders = async () => {

        const orders = await new OrdersDatabase().getOrders()

        return orders
    }

    getOrderById = async (
        id: string
    ) => {

        const order = await new OrdersDatabase().getOrderById(id)

        return order
    }

    makeOrder = async (
        pizza: string,
        quantity: number
    ): Promise<void> => {

        if (!pizza || !quantity) {
            throw new Error("Preencha todos os campos")
        }

        const id = new IdGenerator().generate()

        const order = new Order(id, pizza, quantity)

        await new OrdersDatabase().makeOrder(order)
    }
}