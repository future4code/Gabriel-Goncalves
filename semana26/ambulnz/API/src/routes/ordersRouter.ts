import express from "express";
import { OrdersController } from "../controller/ordersController";

export const ordersRouter = express.Router()

const ordersController = new OrdersController()

ordersRouter.get("/orders", ordersController.getOrders)
ordersRouter.get("/orders/:id", ordersController.getOrderById)
ordersRouter.post("/orders/make", ordersController.makeOrder)