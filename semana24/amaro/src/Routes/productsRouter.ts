import express from "express"
import { ProductsController } from "../Controller/productsController"

export const productsRouter = express.Router()

const productsController = new ProductsController()

productsRouter.get("/byQuery", productsController.getProductByQuery)
productsRouter.post("/create", productsController.createProduct)