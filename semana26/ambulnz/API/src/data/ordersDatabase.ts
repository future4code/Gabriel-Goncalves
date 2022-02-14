import { Order } from "../model/order"
import { BaseDataase } from "./baseDatabase"

export class OrdersDatabase extends BaseDataase {

    getOrders = async () => {

        const result = await this.connection("orders")
            .select("*")

        return result
    }

    getOrderById = async (
        id: string
    ) => {

        const result = await this.connection()
            .select("orders.id")
            .select("orders.pizza")
            .select("orders.quantity")
            .select("pizzas.price")
            .select("pizzas.ingredients")
            .from("orders")
            .leftJoin("pizzas", "orders.pizza", "pizzas.name")
            .where({ "orders.id": `${id}` })

        return result[0]
    }

    makeOrder = async (
        order: Order
    ): Promise<void> => {

        await this.connection()
            .insert(order)
            .into("orders")
    }
}