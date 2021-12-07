import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchases from "./endpoints/createPurchases";
import createUsers from "./endpoints/createUsers";
import getProducts from "./endpoints/getProducts";
import getUsers from "./endpoints/getUsers";

app.post("/users", createUsers)
app.get("/users", getUsers)

app.post("/products", createProduct)
app.get("/products", getProducts)

app.post("/purchases", createPurchases)