import { PizzasDatabase } from "../data/pizzasDatabase"
import { Pizza } from "../model/pizza"

export class PizzasBuisiness {

    getPizzas = async ():Promise<Pizza[]> => {

        const pizzas = await new PizzasDatabase().getPizzas()

        return pizzas
    }
}