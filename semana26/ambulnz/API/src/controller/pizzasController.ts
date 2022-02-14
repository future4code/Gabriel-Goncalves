import { Request, Response } from "express";
import { PizzasBuisiness } from "../buisiness/pizzas.buisiness";
import { Pizza } from "../model/pizza";

export class PizzasController {

    getPizzas = async (
        req: Request,
        res: Response
    ) => {

        try {

            const pizzas = await new PizzasBuisiness().getPizzas()

            res.status(200).send(pizzas)

        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }
}