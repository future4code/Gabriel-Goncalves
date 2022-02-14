import React from 'react'
import { URL } from '../../BASE_URL/BASE_URL'
import axios from 'axios'
import "./ShopCart.css"

const ShopCart = (props) => {

    const cart = props.cart
    const orders = cart.map((item) => {
        return { pizza: item.name, quantity: item.quantity }
    })

    const findOrder = (pizza) => {
        const index = orders.findIndex((item) => {
            return item.pizza === pizza.name
        })

        let body = orders[index];

        makeOrder(body)
    }

    const makeOrder = (body) => {
        axios.post(`${URL}/api/orders/make`, body)
            .then((response) => {
                alert(response.data)
            }).catch((error) => {
                alert(error.message)
                console.error(error.message)
            })
    }

    const removeFromCart = (order) => {
        const position = cart.findIndex((item) => {
            return order.name === item.name
        })

        let newCart = [...cart]

        if (newCart[position].quantity === 1) {
            newCart.splice(position, 1)

        } else {
            newCart[position].quantity -= 1

        }
        
        props.setCart(newCart)
    }

    const cartCard = cart && cart.map((pizza) => {
        return <div id='cartCard' key={pizza.name}>
            <h4>{pizza.name}</h4>
            <h5>R${(pizza.price * pizza.quantity).toFixed(2)}</h5>
            <button onClick={() => removeFromCart(pizza)}>Remove</button>
            <button onClick={() => findOrder(pizza)}>Confirm</button>
        </div>
    })

    const hideShopCart = () => {
        document.getElementById("shopCartPage").style.opacity = 0
        document.getElementById("shopCartPage").style.transform = "translate(110px, 0)"
    }

    const confirmAll = () => {
        orders.forEach((order) => {
            makeOrder(order)
        })
    } 

    return(
        <div id='shopCartPage'>
            {cart.length !== 0 ? cartCard : <h3>ShopCart empty :(</h3>}
            <button id='closeShopCartButton' onClick={() => hideShopCart()}>X</button>
            <button onClick={() => confirmAll()}>Confirm All</button>
        </div>
    )
}

export default ShopCart