import express from "express"
import { PizzasController } from "../controller/pizzasController"

export const pizzasRouter = express.Router()

const pizzasControler = new PizzasController()

pizzasRouter.get("/pizzas", pizzasControler.getPizzas)