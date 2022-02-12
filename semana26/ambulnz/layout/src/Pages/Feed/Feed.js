import React, { useState, useEffect } from "react"
import axios from "axios"
import { URL } from "../../BASE_URL/BASE_URL.js"
import Orders from "../../Components/Orders/Orders.js";
import "./Feed.css"
import ShopCart from "../../Components/ShopCart/ShopCart.js";
import PizzaCard from "../../Components/PizzaCard/PizzaCard.js";

const Feed = () => {

    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState([])

    const getPizzas = () => {
        axios.get(`${URL}/api/pizzas`)
            .then((response) => {
                setPizzas(response.data)
            }).catch((error) => {
                alert(error.message)
                console.error(error)
            })
    }

    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <div id="mainPage">

            <PizzaCard
                cart={cart}
                setCart={setCart}
                pizzas={pizzas}
            />
            <Orders
                cart={cart}
            />
            <ShopCart
                cart={cart}
                setCart={setCart}
            />
        </div>
    )
}

export default Feed