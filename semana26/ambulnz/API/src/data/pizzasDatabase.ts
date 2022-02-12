import { Pizza } from "../model/pizza"
import { BaseDataase } from "./baseDatabase"

export class PizzasDatabase extends BaseDataase {

    getPizzas = async (): Promise<Pizza[]> => {

        const result = await this.connection("pizzas")
            .select("*")

        const pizzasArray = result.map((pizza) => {
            return { ...pizza, ingredients: JSON.parse(pizza.ingredients) }
        })

        return pizzasArray
    }
}